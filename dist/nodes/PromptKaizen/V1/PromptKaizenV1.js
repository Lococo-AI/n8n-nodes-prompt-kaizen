"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptKaizenV1 = void 0;
const router_1 = require("./actions/router");
const versionDescription_1 = require("./actions/versionDescription");
const methods_1 = require("./methods");
class PromptKaizenV1 {
    constructor(baseDescription) {
        this.methods = { loadOptions: methods_1.loadOptions };
        this.description = {
            ...baseDescription,
            ...versionDescription_1.versionDescription,
        };
    }
    async execute() {
        return await router_1.router.call(this);
    }
}
exports.PromptKaizenV1 = PromptKaizenV1;
//# sourceMappingURL=PromptKaizenV1.js.map