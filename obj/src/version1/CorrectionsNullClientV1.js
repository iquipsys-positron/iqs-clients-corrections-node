"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class CorrectionsNullClientV1 {
    getCorrections(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getCorrectionById(correlationId, orgId, correctionId, callback) {
        callback(null, null);
    }
    createCorrection(correlationId, orgId, correction, callback) {
        callback(null, correction);
    }
    updateCorrection(correlationId, orgId, correction, callback) {
        callback(null, correction);
    }
    deleteCorrectionById(correlationId, orgId, correctionId, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.CorrectionsNullClientV1 = CorrectionsNullClientV1;
//# sourceMappingURL=CorrectionsNullClientV1.js.map