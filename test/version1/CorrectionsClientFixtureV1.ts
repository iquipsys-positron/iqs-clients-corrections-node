let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { IOrganizationsClientV1 } from 'pip-clients-organizations-node';

import { CorrectionV1 } from '../../src/version1/CorrectionV1';
import { CorrectionStatusV1 } from '../../src/version1/CorrectionStatusV1';
import { ICorrectionsClientV1 } from '../../src/version1/ICorrectionsClientV1';

let CORRECTION1: CorrectionV1 = {
    id: '1',
    org_id: '1',
    status: CorrectionStatusV1.Requested,
    object_id: '1',
    time: new Date()
};
let CORRECTION2: CorrectionV1 = {
    id: '2',
    org_id: '1',
    status: CorrectionStatusV1.Approved,
    object_id: '1',
    time: new Date()
};

export class CorrectionsClientFixtureV1 {
    private _client: ICorrectionsClientV1;
    
    constructor(client: ICorrectionsClientV1, organizationsClient: IOrganizationsClientV1) {
        this._client = client;
        
        if (organizationsClient != null) {
            organizationsClient.createOrganization(
                null,
                { id: '1', name: 'Test organization', active: true },
                (err, organization) => {}
            );
        }
    }
        
    public testCrudOperations(done) {
        let correction1, correction2;

        async.series([
        // Create one correction
            (callback) => {
                this._client.createCorrection(
                    null,
                    '1',
                    CORRECTION1,
                    (err, correction) => {
                        assert.isNull(err);

                        assert.isObject(correction);
                        assert.equal(correction.org_id, CORRECTION1.org_id);
                        assert.equal(correction.status, CORRECTION1.status);
                        assert.equal(correction.object_id, CORRECTION1.object_id);

                        correction1 = correction;

                        callback();
                    }
                );
            },
        // Create another correction
            (callback) => {
                this._client.createCorrection(
                    null,
                    '1',
                    CORRECTION2,
                    (err, correction) => {
                        assert.isNull(err);

                        assert.isObject(correction);
                        assert.equal(correction.org_id, CORRECTION2.org_id);
                        assert.equal(correction.status, CORRECTION2.status);
                        assert.equal(correction.object_id, CORRECTION2.object_id);

                        correction2 = correction;

                        callback();
                    }
                );
            },
        // Get all corrections
            (callback) => {
                this._client.getCorrections(
                    null,
                    '1',
                    null,
                    new PagingParams(0,5,false),
                    (err, corrections) => {
                        assert.isNull(err);

                        assert.isObject(corrections);
                        assert.isTrue(corrections.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the correction
            (callback) => {
                correction1.reason = 'Updated correction 1';

                this._client.updateCorrection(
                    null,
                    '1',
                    correction1,
                    (err, correction) => {
                        assert.isNull(err);

                        assert.isObject(correction);
                        assert.equal(correction.reason, 'Updated correction 1');
                        assert.equal(correction.id, CORRECTION1.id);

                        correction1 = correction;

                        callback();
                    }
                );
            },
        // Delete correction
            (callback) => {
                this._client.deleteCorrectionById(
                    null,
                    '1',
                    correction1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete correction
            (callback) => {
                this._client.getCorrectionById(
                    null,
                    '1',
                    correction1.id,
                    (err, correction) => {
                        assert.isNull(err);
                        
                        assert.isNull(correction || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
