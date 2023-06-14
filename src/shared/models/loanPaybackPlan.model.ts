import { PaymentPlans } from "./paymentPlan";

export class LoanPaybackPlan {    
    loanAmount: number;
    duration: number;
    interestRate: number;
    amountPerMonth: number;
    paymentPlans : PaymentPlans[];  
}

