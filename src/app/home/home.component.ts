import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current_ctc = 0;
  hike = 35;
  final_ctc = 0;
  monthly_gross = 0;
  net_annual = 0;
  net_month = 0;

  pf = 0;
  vpf = 0;
  basic_pay = 0;
  basic_pay_per = 50;
  total_deductions = 0;
  increment = 0;
  gratuvity = 0;
  variable_pay = 0;
  others = 0;

  performAction = false

  constructor() {}

  ngOnInit(): void {
  }

  find_hike(){

    this.increment = (this.current_ctc * this.hike) / 100
    this.final_ctc = (this.increment + this.current_ctc)
    this.monthly_gross = this.final_ctc / 12;

    this.basic_pay = (this.monthly_gross * this.basic_pay_per) / 100
    this.pf = (this.basic_pay * 24) / 100
    this.gratuvity = (this.basic_pay * 5) / 100
    this.vpf = (this.basic_pay * 20) / 100
    this.total_deductions = this.pf + this.vpf + this.gratuvity + this.variable_pay + this.others

    this.net_month = this.monthly_gross - this.total_deductions
    this.net_annual = this.net_month * 12;
   
  }
}
