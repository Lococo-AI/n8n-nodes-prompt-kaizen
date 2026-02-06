import type { ICredentialType, INodeProperties, ICredentialTestRequest, Icon } from 'n8n-workflow';

export class PromptKaizenApi implements ICredentialType {
	name = 'promptKaizenApi';
	displayName = 'Prompt Kaizen API';
	documentationUrl = 'https://prompt-kaizen.lococo.ai';
	icon: Icon = 'file:raccoon.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://prompt-kaizen.lococo.ai/api',
			required: true,
		},
	];
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/health',
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};
}
