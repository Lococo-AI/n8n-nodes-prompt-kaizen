import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

import { apiRequest } from '../transport';
import { IPromptResponse, ITagResponse, IVersionResponse } from '../actions/Interfaces';

export async function getPrompts(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequest.call(this, 'GET', 'prompts', {}, {});

	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	const prompts = Array.isArray(responseData) ? responseData : [responseData];

	return prompts.map((prompt: IPromptResponse) => ({
		name: `${prompt.name} (${prompt.prompt_type})`,
		value: prompt.id,
		description: prompt.description || '',
	}));
}

export async function getVersions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const promptId = this.getCurrentNodeParameter('promptId') as string;
	if (!promptId) return [];

	const responseData: IPromptResponse = await apiRequest.call(
		this,
		'GET',
		`prompts/${promptId}`,
		{},
		{},
	);

	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	return responseData.versions.map((version: IVersionResponse) => ({
		name: `${version.version} (${version.content_type})`,
		value: version.id,
		description: version.changelog || 'No changelog',
	}));
}

export async function getTags(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const promptId = this.getCurrentNodeParameter('promptId') as string;
	if (!promptId) return [];

	const responseData: IPromptResponse = await apiRequest.call(
		this,
		'GET',
		`prompts/${promptId}`,
		{},
		{},
	);

	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	return responseData.tags.map((tag: ITagResponse) => ({
		name: tag.name,
		value: tag.name,
	}));
}
