"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CorrectionsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-corrections", "controller", "*", "*", "*"));
    }
    getCorrections(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'corrections.get_corrections');
        this._controller.getCorrections(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getCorrectionById(correlationId, orgId, correctionId, callback) {
        let timing = this.instrument(correlationId, 'corrections.get_correction_by_id');
        this._controller.getCorrectionById(correlationId, correctionId, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }
    createCorrection(correlationId, orgId, correction, callback) {
        let timing = this.instrument(correlationId, 'corrections.create_correction');
        this._controller.createCorrection(correlationId, correction, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }
    updateCorrection(correlationId, orgId, correction, callback) {
        let timing = this.instrument(correlationId, 'corrections.update_correction');
        this._controller.updateCorrection(correlationId, correction, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }
    deleteCorrectionById(correlationId, orgId, correctionId, callback) {
        let timing = this.instrument(correlationId, 'corrections.delete_correction_by_id');
        this._controller.deleteCorrectionById(correlationId, correctionId, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }
}
exports.CorrectionsDirectClientV1 = CorrectionsDirectClientV1;
//# sourceMappingURL=CorrectionsDirectClientV1.js.map