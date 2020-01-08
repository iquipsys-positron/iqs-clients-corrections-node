let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';
import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';

import { CorrectionsMemoryPersistence } from 'iqs-services-corrections-node';
import { CorrectionsController } from 'iqs-services-corrections-node';
import { CorrectionsHttpServiceV1 } from 'iqs-services-corrections-node';
import { ICorrectionsClientV1 } from '../../src/version1/ICorrectionsClientV1';
import { CorrectionsHttpProxyClientV1 } from '../../src/version1/CorrectionsHttpProxyClientV1';
import { CorrectionsClientFixtureV1 } from './CorrectionsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-corrections': 3000 
    },
    active_tenants: ['1']
}

suite('CorrectionsHttpProxyClientV1', ()=> {
    let service: CorrectionsHttpServiceV1;
    let client: CorrectionsHttpProxyClientV1;
    let fixture: CorrectionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CorrectionsMemoryPersistence();
        let controller = new CorrectionsController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new CorrectionsHttpServiceV1();
        service.configure(httpConfig);

        let organizationsClient = new OrganizationsMemoryClientV1();
        
        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-corrections', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-corrections', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-corrections', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('pip-services-organizations', 'client', 'memory', 'default', '1.0'), organizationsClient
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CorrectionsHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CorrectionsClientFixtureV1(client, organizationsClient);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
