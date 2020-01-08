import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICorrectionsClientV1 } from './ICorrectionsClientV1';
import { CorrectionV1 } from './CorrectionV1';
export declare class CorrectionsNullClientV1 implements ICorrectionsClientV1 {
    getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CorrectionV1>) => void): void;
    getCorrectionById(correlationId: string, orgId: string, correctionId: string, callback: (err: any, correction: CorrectionV1) => void): void;
    createCorrection(correlationId: string, orgId: string, correction: CorrectionV1, callback: (err: any, correction: CorrectionV1) => void): void;
    updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1, callback: (err: any, correction: CorrectionV1) => void): void;
    deleteCorrectionById(correlationId: string, orgId: string, correctionId: string, callback: (err: any, correction: CorrectionV1) => void): void;
}
