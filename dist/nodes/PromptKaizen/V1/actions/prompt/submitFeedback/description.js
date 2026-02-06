"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitFeedbackDescription = void 0;
exports.submitFeedbackDescription = [
    {
        displayName: 'Prompt Name or ID',
        name: 'promptId',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getPrompts',
        },
        required: true,
        default: '',
        description: 'The prompt to submit feedback for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Version Name or ID',
        name: 'feedbackVersionId',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getVersions',
            loadOptionsDependsOn: ['promptId'],
        },
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Rating',
        name: 'rating',
        type: 'number',
        typeOptions: {
            minValue: 1,
            maxValue: 5,
            numberStepSize: 1,
        },
        required: true,
        default: 5,
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        typeOptions: {
            rows: 4,
        },
        default: '',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Test Input',
        name: 'testInput',
        type: 'string',
        default: '',
        description: 'Input used in the test scenario',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Test Actual Output',
        name: 'testActualOutput',
        type: 'string',
        default: '',
        description: 'Actual output from the test',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
    {
        displayName: 'Test Expected Output',
        name: 'testExpectedOutput',
        type: 'string',
        default: '',
        description: 'Expected output for the test',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['submitFeedback'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map