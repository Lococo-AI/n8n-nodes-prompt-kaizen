"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromptDescription = void 0;
exports.getPromptDescription = [
    {
        displayName: 'Prompt Name or ID',
        name: 'promptId',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getPrompts',
        },
        required: true,
        default: '',
        description: 'The prompt to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['getPrompt'],
            },
        },
    },
    {
        displayName: 'Version Selection',
        name: 'versionSelector',
        type: 'options',
        options: [
            {
                name: 'Latest Version',
                value: 'latest',
            },
            {
                name: 'Specific Version',
                value: 'version',
            },
            {
                name: 'By Tag',
                value: 'tag',
            },
        ],
        default: 'latest',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['getPrompt'],
            },
        },
    },
    {
        displayName: 'Version Name or ID',
        name: 'versionId',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getVersions',
            loadOptionsDependsOn: ['promptId'],
        },
        default: '',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['getPrompt'],
                versionSelector: ['version'],
            },
        },
    },
    {
        displayName: 'Tag Name or ID',
        name: 'tagName',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getTags',
            loadOptionsDependsOn: ['promptId'],
        },
        default: '',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['getPrompt'],
                versionSelector: ['tag'],
            },
        },
    },
    {
        displayName: 'Context Variables',
        name: 'context',
        type: 'json',
        default: '={{ $json }}',
        description: 'Variables for template rendering',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['getPrompt'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map