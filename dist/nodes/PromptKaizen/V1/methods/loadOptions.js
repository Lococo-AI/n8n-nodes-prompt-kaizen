"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrompts = getPrompts;
exports.getVersions = getVersions;
exports.getTags = getTags;
const n8n_workflow_1 = require("n8n-workflow");
const transport_1 = require("../transport");
async function getPrompts() {
    const responseData = await transport_1.apiRequest.call(this, 'GET', 'prompts', {}, {});
    if (responseData === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    const prompts = Array.isArray(responseData) ? responseData : [responseData];
    return prompts.map((prompt) => ({
        name: `${prompt.name} (${prompt.prompt_type})`,
        value: prompt.id,
        description: prompt.description || '',
    }));
}
async function getVersions() {
    const promptId = this.getCurrentNodeParameter('promptId');
    if (!promptId)
        return [];
    const responseData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
    if (responseData === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return responseData.versions.map((version) => ({
        name: `${version.version} (${version.content_type})`,
        value: version.id,
        description: version.changelog || 'No changelog',
    }));
}
async function getTags() {
    const promptId = this.getCurrentNodeParameter('promptId');
    if (!promptId)
        return [];
    const responseData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
    if (responseData === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    return responseData.tags.map((tag) => ({
        name: tag.name,
        value: tag.name,
    }));
}
//# sourceMappingURL=loadOptions.js.map