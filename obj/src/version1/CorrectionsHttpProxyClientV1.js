"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const CorrectionsHttpClientV1_1 = require("./CorrectionsHttpClientV1");
class CorrectionsHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(CorrectionsHttpClientV1_1.CorrectionsHttpClientV1, 'iqs-services-corrections', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getCorrections(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getCorrections(correlationId, orgId, filter, paging, callback);
        });
    }
    getCorrectionById(correlationId, orgId, correctionId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getCorrectionById(correlationId, orgId, correctionId, callback);
        });
    }
    createCorrection(correlationId, orgId, correction, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.createCorrection(correlationId, orgId, correction, callback);
        });
    }
    updateCorrection(correlationId, orgId, correction, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.updateCorrection(correlationId, orgId, correction, callback);
        });
    }
    deleteCorrectionById(correlationId, orgId, correctionId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteCorrectionById(correlationId, orgId, correctionId, callback);
        });
    }
}
exports.CorrectionsHttpProxyClientV1 = CorrectionsHttpProxyClientV1;
//# sourceMappingURL=CorrectionsHttpProxyClientV1.js.map