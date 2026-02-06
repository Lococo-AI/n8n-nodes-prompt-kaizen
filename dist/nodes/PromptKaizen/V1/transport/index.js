"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = apiRequest;
async function apiRequest(method, endpoint, body = {}, query = {}) {
    const credentials = await this.getCredentials('promptKaizenApi');
    const baseUrl = credentials.baseUrl.replace(/\/$/, '');
    const apiKey = credentials.apiKey;
    const options = {
        method,
        body,
        qs: query,
        url: `${baseUrl}/${endpoint}`,
        headers: {
            'x-api-key': apiKey,
            'content-type': 'application/json; charset=utf-8',
        },
        json: true,
    };
    return await this.helpers.httpRequest(options);
}
//# sourceMappingURL=index.js.map