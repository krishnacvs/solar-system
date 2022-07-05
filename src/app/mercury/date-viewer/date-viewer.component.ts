import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-viewer',
  templateUrl: './date-viewer.component.html',
  styleUrls: ['./date-viewer.component.scss']
})
export class DateViewerComponent implements OnInit {
  today:string = this.getCurrentDate();
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate() {
    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
  }
}
