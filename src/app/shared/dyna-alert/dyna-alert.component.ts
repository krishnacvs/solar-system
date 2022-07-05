import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dyna-alert',
  templateUrl: './dyna-alert.component.html',
  styleUrls: ['./dyna-alert.component.scss']
})
export class DynaAlertComponent implements OnInit {

  @Input() message:string; 
  @Output() close = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){

  }
}
