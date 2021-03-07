import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  source: any[]=[];
  selectedSource!: string;
  date!: Date;

  constructor() { }

  ngOnInit(): void {
    this.source = [
      {value: '1', label: 'Salary'},
      {value:'2', label: 'Other'}
    ]
  }

}
