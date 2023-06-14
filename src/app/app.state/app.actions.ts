import { LoanRequest } from '../../shared/models/loanRequest.model';
import { BaseSuccessAction, BaseFailedAction } from '../../shared/action.interface';
import { Action } from '@ngrx/store';

export enum AppActionNames {
    GET_LOAN_PLAN = '[APP] Get Loan Plan',
    ACTION_SUCCESS = '[APP] Action Success',
    ACTION_FAILED = '[APP] Action Failed'
}

export interface  AppAction extends Action {
    type: AppActionNames;
    payload?: any;
}

export class GetLoanPlanAction implements Action {
  type = AppActionNames.GET_LOAN_PLAN;
  constructor(public payload: LoanRequest) {}
}


export class AppSucessAction implements Action {
  type = AppActionNames.ACTION_SUCCESS;
  constructor(public subType: AppActionNames, public payload: any) {}
}

export class AppFailedAction implements BaseFailedAction {
  type = AppActionNames.ACTION_FAILED;
  constructor(public subType: AppActionNames, public payload: any) {}
}