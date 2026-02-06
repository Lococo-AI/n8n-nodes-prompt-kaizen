import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import type { PromptKaizen } from './Interfaces';
import * as prompt from './prompt';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<PromptKaizen>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		const promptKaizen = {
			resource,
			operation,
		} as PromptKaizen;

		try {
			if (promptKaizen.resource === 'prompt') {
				responseData = await prompt[promptKaizen.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
