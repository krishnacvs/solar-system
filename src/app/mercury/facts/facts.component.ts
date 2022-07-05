import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Fact } from './fact-interface';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})

export class FactsComponent implements OnInit {

  
  factsList:Array<Fact> = [];
  factPropertyName:string = '';
  factPropertyValue:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log("onSubmit", f);
    this.factPropertyName = f.value.factPropertyName;
    this.factPropertyValue = f.value.factPropertyValue;
    var fact:Fact = {} as Fact;
    fact.factPropertyName = this.factPropertyName;
    fact.factPropertyValue = this.factPropertyValue;
    this.factsList.push(fact);
    console.log(this.factsList);
  }

}
