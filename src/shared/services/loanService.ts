import { Injectable } from "@angular/core";
import { BaseService } from './baseService';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoanRequest } from "../models/loanRequest.model";
import { API_URI } from "../../commonsettings/sharedsettings";
import { LoanPaybackPlan } from "../models/loanPaybackPlan.model";

@Injectable()
export class loanService extends BaseService {        
  constructor(protected _http: HttpClient){
    super(_http);
    this.baseUrl = API_URI.loanApi;
  }
    getLoanPlan(loanRequest: LoanRequest): Observable<LoanPaybackPlan> {
    let url = this.baseUrl + '/LoanPlanCalculator/get-loan-plan';
    return this.post(`${url}`, loanRequest);
  }
}
