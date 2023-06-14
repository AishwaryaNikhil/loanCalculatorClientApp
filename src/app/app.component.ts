import { Component, OnInit } from '@angular/core';
import { sharedsettings } from 'src/commonsettings/sharedsettings';
import { LoanRequest } from '../shared/models/loanRequest.model';
import { Dispatcher } from "../app/app.dispatcher";
import { AppActionNames, AppFailedAction, AppSucessAction, GetLoanPlanAction } from "../app/app.state/app.actions";
import { Subscription } from 'rxjs/internal/Subscription';
import { AppSelector } from '../app/app.state/app.selectors';
import * as response from '../app/testresponse.json';
import { LoanPaybackPlan } from '../shared/models/loanPaybackPlan.model';
import { PaymentPlans } from '../shared/models/paymentPlan';
import { loanService } from '../shared/services/loanService';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loanType: string[] = [];
  loanAmountText: number = 0;
  loanAmountSlider: number = 0;
  term: string = ""; 
  loanRequestInput: LoanRequest = new LoanRequest();
  selectedLoanType: string = "";
  loanPaybackPlan: LoanPaybackPlan = new LoanPaybackPlan();
  showTableData: boolean = false; 
  private subscriptions: Subscription[] = [];
  constructor(
    private dispatcher: Dispatcher,
    private appSelector: AppSelector,
    private loanService:loanService) 
  {
    this.subscriptions = this.registerSubcriptions();
  }
  ngOnInit(): void {
    this.getLoanType();  
    this.selectedLoanType = this.loanType[0];
  }
  
  getLoanType(){
    this.loanType = sharedsettings.loanTypes;
  }
  
  getSliderAmount(event:any){
    this.loanAmountText = event;
  }
  
  getTextAmount(event:any){
    this.loanAmountSlider = event;
  }
  
  calculateLoanPlan()
  {  
    this.loanRequestInput =  new LoanRequest();
    this.loanRequestInput.duration = Number(this.term);
    this.loanRequestInput.loanAmount = this.loanAmountText;
    this.loanRequestInput.loanPlanType =  this.selectedLoanType;
    //this.dispatcher.fire(new GetLoanPlanAction(this.loanRequestInput));
    this.loanPaybackPlan = response as LoanPaybackPlan; 
    this.showTableData = true;
    // this.loanService.getLoanPlan(this.loanRequestInput).subscribe(data => {
    //   this.loanPaybackPlan = data as LoanPaybackPlan; 
    //   console.log(JSON.stringify(this.loanPaybackPlan));
    // });;

  }
  
  private registerSubcriptions() : Subscription[] {
    return [
      this.appSelector.actionSuccessOfSubtype$(AppActionNames.GET_LOAN_PLAN)
      .subscribe(action => {
        if (action.payload) {
          console.log("Response");
          this.loanPaybackPlan = new LoanPaybackPlan();
          this.loanPaybackPlan = action.payload as LoanPaybackPlan; 
          }
      })
    ]
  }
  
  
  }
  