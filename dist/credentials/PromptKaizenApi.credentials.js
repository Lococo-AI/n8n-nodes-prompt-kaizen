"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptKaizenApi = void 0;
class PromptKaizenApi {
    constructor() {
        this.name = 'promptKaizenApi';
        this.displayName = 'Prompt Kaizen API';
        this.documentationUrl = 'https://prompt-kaizen.lococo.ai';
        this.icon = 'file:raccoon.svg';
        this.properties = [
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
        this.test = {
            request: {
                baseURL: '={{$credentials.baseUrl}}',
                url: '/health',
                headers: {
                    Authorization: '=Bearer {{$credentials.apiKey}}',
                },
            },
        };
    }
}
exports.PromptKaizenApi = PromptKaizenApi;
//# sourceMappingURL=PromptKaizenApi.credentials.js.map