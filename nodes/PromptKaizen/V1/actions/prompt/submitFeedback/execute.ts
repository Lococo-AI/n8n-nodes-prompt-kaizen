import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function submitFeedback(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const promptId = this.getNodeParameter('promptId', index) as string;
	const versionId = this.getNodeParameter('feedbackVersionId', index) as string;
	const rating = this.getNodeParameter('rating', index) as number;
	const comment = this.getNodeParameter('comment', index, '') as string;
	const testInput = this.getNodeParameter('testInput', index, '') as string;
	const testActualOutput = this.getNodeParameter('testActualOutput', index, '') as string;
	const testExpectedOutput = this.getNodeParameter('testExpectedOutput', index, '') as string;

	const body: IDataObject = {
		version_id: versionId,
		rating,
	};

	if (comment) body.comment = comment;
	if (testInput) body.test_input = testInput;
	if (testActualOutput) body.test_actual_output = testActualOutput;
	if (testExpectedOutput) body.test_expected_output = testExpectedOutput;

	const responseData = await apiRequest.call(
		this,
		'POST',
		`prompts/${promptId}/feedback`,
		body,
		{},
	);

	return this.helpers.returnJsonArray(responseData as IDataObject);
}
