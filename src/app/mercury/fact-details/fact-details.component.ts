import { Component, OnInit } from '@angular/core';
import { Hundred } from '../rx100/hundred.service';
import { FactService } from './fact.service';

@Component({
  selector: 'app-fact-details',
  templateUrl: './fact-details.component.html',
  styleUrls: ['./fact-details.component.scss']
})
export class FactDetailsComponent implements OnInit {

  activated:boolean = false; 

  constructor(private factService: FactService) { }

  ngOnInit(): void {
    
  }

  activateMonitoring(){
    this.factService.monitorClimate.next(true);
  }

  deActivateMonitoring(){
    this.factService.monitorClimate.next(false);
  }
}
