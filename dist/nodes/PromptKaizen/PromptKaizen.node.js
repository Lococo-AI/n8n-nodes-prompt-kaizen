"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptKaizen = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const PromptKaizenV1_1 = require("./V1/PromptKaizenV1");
class PromptKaizen extends n8n_workflow_1.VersionedNodeType {
    constructor() {
        const baseDescription = {
            displayName: 'Prompt Kaizen',
            name: 'promptKaizen',
            group: ['transform'],
            icon: 'file:raccoon.svg',
            description: 'Use prompts and submit feedback to Prompt Kaizen',
            defaultVersion: 1,
        };
        const nodeVersions = {
            1: new PromptKaizenV1_1.PromptKaizenV1(baseDescription),
        };
        super(nodeVersions, baseDescription);
    }
}
exports.PromptKaizen = PromptKaizen;
//# sourceMappingURL=PromptKaizen.node.js.map