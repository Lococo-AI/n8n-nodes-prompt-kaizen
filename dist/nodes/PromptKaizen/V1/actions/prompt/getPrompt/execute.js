"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrompt = getPrompt;
const transport_1 = require("../../../transport");
async function getPrompt(index) {
    const promptId = this.getNodeParameter('promptId', index);
    const versionSelector = this.getNodeParameter('versionSelector', index);
    const contextStr = this.getNodeParameter('context', index, '{}');
    let context = {};
    try {
        context = typeof contextStr === 'string' ? JSON.parse(contextStr) : contextStr;
    }
    catch {
        context = {};
    }
    let versionData;
    let promptData;
    if (versionSelector === 'latest') {
        promptData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
        versionData = promptData.versions[promptData.versions.length - 1];
    }
    else if (versionSelector === 'version') {
        const versionId = this.getNodeParameter('versionId', index);
        versionData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}/versions/${versionId}`, {}, {});
        promptData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
    }
    else {
        const tagName = this.getNodeParameter('tagName', index);
        versionData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}/tags/${tagName}/version`, {}, {});
        promptData = await transport_1.apiRequest.call(this, 'GET', `prompts/${promptId}`, {}, {});
    }
    let content = versionData.content;
    if (versionData.content_type === 'template' && Object.keys(context).length > 0) {
        const renderResponse = await transport_1.apiRequest.call(this, 'POST', `prompts/${promptId}/versions/${versionData.id}/render`, { context }, {});
        content = renderResponse.rendered_content;
    }
    const responseData = {
        prompt_id: promptId,
        version_id: versionData.id,
        version: versionData.version,
        content_type: versionData.content_type,
        prompt_type: promptData.prompt_type,
        content,
        raw_content: versionData.content,
        variables: versionData.variables,
        context_used: context,
    };
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map