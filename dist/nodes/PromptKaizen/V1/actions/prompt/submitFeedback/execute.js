"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitFeedback = submitFeedback;
const transport_1 = require("../../../transport");
async function submitFeedback(index) {
    const promptId = this.getNodeParameter('promptId', index);
    const versionId = this.getNodeParameter('feedbackVersionId', index);
    const rating = this.getNodeParameter('rating', index);
    const comment = this.getNodeParameter('comment', index, '');
    const testInput = this.getNodeParameter('testInput', index, '');
    const testActualOutput = this.getNodeParameter('testActualOutput', index, '');
    const testExpectedOutput = this.getNodeParameter('testExpectedOutput', index, '');
    const body = {
        version_id: versionId,
        rating,
    };
    if (comment)
        body.comment = comment;
    if (testInput)
        body.test_input = testInput;
    if (testActualOutput)
        body.test_actual_output = testActualOutput;
    if (testExpectedOutput)
        body.test_expected_output = testExpectedOutput;
    const responseData = await transport_1.apiRequest.call(this, 'POST', `prompts/${promptId}/feedback`, body, {});
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map