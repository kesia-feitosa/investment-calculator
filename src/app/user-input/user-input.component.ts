import { Component, EventEmitter, Input, Output, signal, output } from '@angular/core';
import type { InvestmentInput } from './investment-input.model';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  //@Output() calculate = new EventEmitter<InvestmentInput>();
  // initialInvestment = '0';
  // annualInvestment = '0';
  // expectedReturn = '5';
  // duration = '10';

  // calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0'); 
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment()
    // });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}
