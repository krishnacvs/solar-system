import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateViewerComponent } from '../date-viewer/date-viewer.component';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, AfterContentInit {

  @ContentChild(DateViewerComponent) dateViewerComponent: DateViewerComponent | undefined;

  @ViewChild('search') search: any;

  faq: any = []

  constructor(private http: HttpClient) { }
  ngAfterContentInit(): void {
    console.log('dateViewerComponent',this.dateViewerComponent);
  }

  ngOnInit(): void {
    this.http.get('assets/faq.json').subscribe(data => {
      this.faq = data;
    })
  }

  onSearch() {
    console.log(this.search.nativeElement.value)
    let searchText = this.search.nativeElement.value; 
    this.faq = this.searchFaq(this.faq, searchText.toString());
  }

  searchFaq(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.question.toLowerCase().includes(searchText);
    });
  }
}
