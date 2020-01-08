"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class CorrectionsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('corrections');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCorrections(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_corrections', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRandomCorrection(correlationId, orgId, filter, callback) {
        this.callCommand('get_random_correction', correlationId, {
            fitler: filter
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
exports.CorrectionsLambdaClientV1 = CorrectionsLambdaClientV1;
//# sourceMappingURL=CorrectionsLambdaClientV1.js.map