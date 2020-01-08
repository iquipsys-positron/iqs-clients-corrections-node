let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';

import { CorrectionsMemoryPersistence } from 'iqs-services-corrections-node';
import { CorrectionsController } from 'iqs-services-corrections-node';
import { ICorrectionsClientV1 } from '../../src/version1/ICorrectionsClientV1';
import { CorrectionsDirectClientV1 } from '../../src/version1/CorrectionsDirectClientV1';
import { CorrectionsClientFixtureV1 } from './CorrectionsClientFixtureV1';

suite('CorrectionsDirectClientV1', ()=> {
    let client: CorrectionsDirectClientV1;
    let fixture: CorrectionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CorrectionsMemoryPersistence();
        let controller = new CorrectionsController();

        let organizationsClient = new OrganizationsMemoryClientV1();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-corrections', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-corrections', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-organizations', 'client', 'memory', 'default', '1.0'), organizationsClient
        );
        controller.setReferences(references);

        client = new CorrectionsDirectClientV1();
        client.setReferences(references);

        fixture = new CorrectionsClientFixtureV1(client, organizationsClient);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
