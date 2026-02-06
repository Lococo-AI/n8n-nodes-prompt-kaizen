import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';
import { IPromptResponse, IRenderVersionResponse, IVersionResponse } from '../../Interfaces';

export async function getPrompt(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const promptId = this.getNodeParameter('promptId', index) as string;
	const versionSelector = this.getNodeParameter('versionSelector', index) as string;
	const contextStr = this.getNodeParameter('context', index, '{}') as string;

	let context: IDataObject = {};
	try {
		context = typeof contextStr === 'string' ? JSON.parse(contextStr) : contextStr;
	} catch {
		context = {};
	}

	let versionData: IVersionResponse;
	let promptData: IPromptResponse;

	if (versionSelector === 'latest') {
		promptData = await apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
		versionData = promptData.versions[promptData.versions.length - 1];
	} else if (versionSelector === 'version') {
		const versionId = this.getNodeParameter('versionId', index) as string;
		versionData = await apiRequest.call(
			this,
			'GET',
			`prompts/${promptId}/versions/${versionId}`,
			{},
			{},
		);
		promptData = await apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
	} else {
		const tagName = this.getNodeParameter('tagName', index) as string;
		versionData = await apiRequest.call(
			this,
			'GET',
			`prompts/${promptId}/tags/${tagName}/version`,
			{},
			{},
		);
		promptData = await apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
	}

	let content = versionData.content;

	if (versionData.content_type === 'template' && Object.keys(context).length > 0) {
		const renderResponse: IRenderVersionResponse = await apiRequest.call(
			this,
			'POST',
			`prompts/${promptId}/versions/${versionData.id}/render`,
			{ context },
			{},
		);
		content = renderResponse.rendered_content;
	}

	const responseData = {
		prompt_id: promptId,
		version_id: versionData.id,
		version: versionData.version,
		content_type: versionData.content_type,
		prompt_type: promptData.prompt_type,
		content,
		raw_content: versionData.content,
		variables: versionData.variables,
		context_used: context,
	};

	return this.helpers.returnJsonArray(responseData as IDataObject);
}
