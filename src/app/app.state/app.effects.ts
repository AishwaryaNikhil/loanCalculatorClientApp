
import { Observable, of as observableOf } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { AppActionNames, AppSucessAction, AppFailedAction, GetLoanPlanAction } from './app.actions';
import { loanService } from '../../shared/services/loanService';
import { LoanRequest } from '../../shared/models/loanRequest.model';
import { LoanPaybackPlan } from '../../shared/models/loanPaybackPlan.model';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private loanService: loanService,
    ) {
    }

    getLoanPlan$ :Observable<any> = this.actions$.pipe(
        ofType(AppActionNames.GET_LOAN_PLAN),
        switchMap((action: GetLoanPlanAction) => {
            const input = action.payload as LoanRequest;
            console.log(JSON.stringify(input));
            return this.loanService
                .getLoanPlan(input).pipe(
                    map(response => {
                        return new AppSucessAction(
                            AppActionNames.ACTION_SUCCESS,
                            response
                        );
                    }),
                    catchError(err =>
                        observableOf(new AppFailedAction(AppActionNames.ACTION_FAILED, err))
                    ),);
        })
    );


}

