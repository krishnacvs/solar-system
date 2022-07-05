import { Component, OnInit } from '@angular/core';
import { FactService } from '../fact.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent implements OnInit {

  activated: boolean = false; 
  constructor(private factService: FactService) { }

  /*
  Subject - No initial value or replay available
  AsyncSubject - Emits latest values to subscribers on completion of the async task - Http Request
  BehaviouralSubject - requires an initial value and emits current values to new subscribers
  ReplaySubject - replays a specified number of last values to new subscribers
  */
  ngOnInit(): void {
    this.factService.monitorClimate.subscribe((data:boolean) => {
      console.log(data);
      this.activated = data;
      console.log(this.activated);
    });
  }

}
