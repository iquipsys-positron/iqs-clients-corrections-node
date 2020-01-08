import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ICorrectionsClientV1 } from './ICorrectionsClientV1';
//import { ICorrectionsController } from 'iqs-services-corrections-node';
import { CorrectionV1 } from './CorrectionV1';

export class CorrectionsDirectClientV1 extends DirectClient<any> implements ICorrectionsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-corrections", "controller", "*", "*", "*"))
    }

    public getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<CorrectionV1>) => void): void {
        let timing = this.instrument(correlationId, 'corrections.get_corrections');
        this._controller.getCorrections(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getCorrectionById(correlationId: string, orgId: string, correctionId: string, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        let timing = this.instrument(correlationId, 'corrections.get_correction_by_id');
        this._controller.getCorrectionById(correlationId, correctionId, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }

    public createCorrection(correlationId: string, orgId: string, correction: CorrectionV1, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        let timing = this.instrument(correlationId, 'corrections.create_correction');
        this._controller.createCorrection(correlationId, correction, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }

    public updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1, 
        callback: (err: any, correction: CorrectionV1) => void): void {
        let timing = this.instrument(correlationId, 'corrections.update_correction');
        this._controller.updateCorrection(correlationId, correction, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }

    public deleteCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        let timing = this.instrument(correlationId, 'corrections.delete_correction_by_id');
        this._controller.deleteCorrectionById(correlationId, correctionId, (err, correction) => {
            timing.endTiming();
            callback(err, correction);
        });
    }
}