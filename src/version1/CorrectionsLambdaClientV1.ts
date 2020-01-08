let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { CorrectionV1 } from './CorrectionV1';
import { ICorrectionsClientV1 } from './ICorrectionsClientV1';

export class CorrectionsLambdaClientV1 extends CommandableLambdaClient implements ICorrectionsClientV1 {       

    constructor(config?: any) {
        super('corrections');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getCorrections(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CorrectionV1>) => void): void {
        this.callCommand( 
            'get_corrections', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRandomCorrection(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.callCommand( 
            'get_random_correction',
            correlationId,
            {
                fitler: filter
            }, 
            callback
        );        
    }

    public getCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.callCommand( 
            'get_correction_by_id',
            correlationId,
            {
                correction_id: correctionId
            }, 
            callback
        );        
    }

    public createCorrection(correlationId: string, orgId: string, correction: CorrectionV1,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.callCommand(
            'create_correction',
            correlationId,
            {
                correction: correction
            }, 
            callback
        );
    }

    public updateCorrection(correlationId: string, orgId: string, correction: CorrectionV1,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.callCommand(
            'update_correction', 
            correlationId,
            {
                correction: correction
            }, 
            callback
        );
    }

    public deleteCorrectionById(correlationId: string, orgId: string, correctionId: string,
        callback: (err: any, correction: CorrectionV1) => void): void {
        this.callCommand(
            'delete_correction_by_id', 
            correlationId,
            {
                correction_id: correctionId
            }, 
            callback
        );
    }
    
}
