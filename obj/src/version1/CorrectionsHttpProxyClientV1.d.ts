import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';
import { CorrectionV1 } from './CorrectionV1';
import { ICorrectionsClientV1 } from './ICorrectionsClientV1';
export declare class CorrectionsHttpProxyClientV1 extends ClustersProxyHttpClientV1<ICorrectionsClientV1> implements ICorrectionsClientV1 {
    constructor(config?: any);
    getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CorrectionV1>) => void): void;
    getCorrectionById(correlationId: string, orgId: string, correctionId: string, callback: (err: any, correction: CorrectionV1) => void): void;
    createCorrection(correlationId: string, orgId: string, correction: CorrectionV1, callback: (err: any, correction: CorrectionV1) => void): void;
    updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1, callback: (err: any, correction: CorrectionV1) => void): void;
    deleteCorrectionById(correlationId: string, orgId: string, correctionId: string, callback: (err: any, correction: CorrectionV1) => void): void;
}
