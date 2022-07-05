import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fact } from '../facts/fact-interface';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.scss']
})
export class FactsListComponent implements OnInit {
  @ViewChild('row') rows: ElementRef | undefined;

  factList: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/fact-list-data.json").subscribe(data =>{
      this.factList = data;
      console.log(this.factList);
    })
  }

  hideRow(){
    if(this.rows != undefined){
      this.rows.nativeElement.style.display = 'none'
    }
  }
}
