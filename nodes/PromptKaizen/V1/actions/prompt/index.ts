import type { INodeProperties } from 'n8n-workflow';

import * as getPrompt from './getPrompt';
import * as submitFeedback from './submitFeedback';

export { getPrompt, submitFeedback };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['prompt'],
			},
		},
		options: [
			{
				name: 'Get Prompt',
				value: 'getPrompt',
				description: 'Retrieve and render a prompt',
				action: 'Get a prompt',
			},
			{
				name: 'Submit Feedback',
				value: 'submitFeedback',
				description: 'Submit feedback for a prompt version',
				action: 'Submit feedback for a prompt',
			},
		],
		default: 'getPrompt',
	},
	...getPrompt.description,
	...submitFeedback.description,
];
