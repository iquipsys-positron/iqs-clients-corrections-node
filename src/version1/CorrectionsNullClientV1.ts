import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ICorrectionsClientV1 } from './ICorrectionsClientV1';
import { CorrectionV1 } from './CorrectionV1';

export class CorrectionsNullClientV1 implements ICorrectionsClientV1 {
            
    public getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CorrectionV1>) => void): void {
        callback(null, new DataPage<CorrectionV1>([], 0));
    }

    public getCorrectionById(correlationId: string, orgId: string, correctionId: string, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        callback(null, null);
    }

    public createCorrection(correlationId: string, orgId: string, correction: CorrectionV1, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        callback(null, correction);
    }

    public updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        callback(null, correction);
    }

    public deleteCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        if (callback) callback(null, null);
    }
}