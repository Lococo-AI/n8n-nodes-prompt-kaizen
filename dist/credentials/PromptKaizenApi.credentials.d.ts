import type { ICredentialType, INodeProperties, ICredentialTestRequest, Icon } from 'n8n-workflow';
export declare class PromptKaizenApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    icon: Icon;
    properties: INodeProperties[];
    test: ICredentialTestRequest;
}
