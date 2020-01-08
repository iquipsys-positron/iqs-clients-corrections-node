"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const CorrectionsNullClientV1_1 = require("../version1/CorrectionsNullClientV1");
const CorrectionsDirectClientV1_1 = require("../version1/CorrectionsDirectClientV1");
const CorrectionsHttpClientV1_1 = require("../version1/CorrectionsHttpClientV1");
const CorrectionsLambdaClientV1_1 = require("../version1/CorrectionsLambdaClientV1");
const CorrectionsHttpProxyClientV1_1 = require("../version1/CorrectionsHttpProxyClientV1");
class CorrectionsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CorrectionsClientFactory.NullClientV1Descriptor, CorrectionsNullClientV1_1.CorrectionsNullClientV1);
        this.registerAsType(CorrectionsClientFactory.DirectClientV1Descriptor, CorrectionsDirectClientV1_1.CorrectionsDirectClientV1);
        this.registerAsType(CorrectionsClientFactory.HttpClientV1Descriptor, CorrectionsHttpClientV1_1.CorrectionsHttpClientV1);
        this.registerAsType(CorrectionsClientFactory.LambdaClientV1Descriptor, CorrectionsLambdaClientV1_1.CorrectionsLambdaClientV1);
        this.registerAsType(CorrectionsClientFactory.HttpProxyClientV1Descriptor, CorrectionsHttpProxyClientV1_1.CorrectionsHttpProxyClientV1);
    }
}
exports.CorrectionsClientFactory = CorrectionsClientFactory;
CorrectionsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'factory', 'default', 'default', '1.0');
CorrectionsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'client', 'null', 'default', '1.0');
CorrectionsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'client', 'direct', 'default', '1.0');
CorrectionsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'client', 'http', 'default', '1.0');
CorrectionsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'client', 'lambda', 'default', '1.0');
CorrectionsClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-corrections', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=CorrectionsClientFactory.js.map