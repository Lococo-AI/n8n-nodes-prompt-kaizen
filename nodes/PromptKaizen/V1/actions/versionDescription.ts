/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { NodeConnectionTypes, type INodeTypeDescription } from 'n8n-workflow';

import * as prompt from './prompt';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Prompt Kaizen',
	name: 'promptKaizen',
	icon: 'file:raccoon.svg',
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Use prompts and submit feedback to Prompt Kaizen',
	defaults: {
		name: 'Prompt Kaizen',
	},
	inputs: [NodeConnectionTypes.Main],
	outputs: [NodeConnectionTypes.Main],
	credentials: [
		{
			name: 'promptKaizenApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Prompt',
					value: 'prompt',
				},
			],
			default: 'prompt',
		},
		...prompt.descriptions,
	],
};
