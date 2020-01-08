"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CorrectionsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/corrections');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCorrections(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_corrections', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCorrectionById(correlationId, orgId, correctionId, callback) {
        this.callCommand('get_correction_by_id', correlationId, {
            correction_id: correctionId
        }, callback);
    }
    createCorrection(correlationId, orgId, correction, callback) {
        this.callCommand('create_correction', correlationId, {
            correction: correction
        }, callback);
    }
    updateCorrection(correlationId, orgId, correction, callback) {
        this.callCommand('update_correction', correlationId, {
            correction: correction
        }, callback);
    }
    deleteCorrectionById(correlationId, orgId, correctionId, callback) {
        this.callCommand('delete_correction_by_id', correlationId, {
            correction_id: correctionId
        }, callback);
    }
}
exports.CorrectionsHttpClientV1 = CorrectionsHttpClientV1;
//# sourceMappingURL=CorrectionsHttpClientV1.js.map