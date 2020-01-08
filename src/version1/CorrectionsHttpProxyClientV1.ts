import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { CorrectionV1 } from './CorrectionV1';
import { ICorrectionsClientV1 } from './ICorrectionsClientV1';
import { CorrectionsHttpClientV1 } from './CorrectionsHttpClientV1';

export class CorrectionsHttpProxyClientV1 extends ClustersProxyHttpClientV1<ICorrectionsClientV1>
    implements ICorrectionsClientV1 {       
    
    constructor(config?: any) {
        super(CorrectionsHttpClientV1, 'iqs-services-corrections', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CorrectionV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getCorrections(correlationId, orgId, filter, paging, callback);
        });
    }

    public getCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getCorrectionById(correlationId, orgId, correctionId, callback);
        });
    }

    public createCorrection(correlationId: string, orgId: string, correction: CorrectionV1,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.createCorrection(correlationId, orgId, correction, callback);
        });
    }

    public updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.updateCorrection(correlationId, orgId, correction, callback);
        });
    }

    public deleteCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteCorrectionById(correlationId, orgId, correctionId, callback);
        });
    }
    
}
