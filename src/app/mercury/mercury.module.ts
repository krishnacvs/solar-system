import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsComponent } from './facts/facts.component';
import { FactsListComponent } from './facts-list/facts-list.component';
import { MercuryRoutingModule } from './mercury-routing.module';
import { FactDetailsComponent } from './fact-details/fact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { DateViewerComponent } from './date-viewer/date-viewer.component';
import { Rx100Component } from './rx100/rx100.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ClimateComponent } from './fact-details/climate/climate.component';
import { ProjectsComponent } from './fact-details/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './fact-details/task/task.component';

@NgModule({
  declarations: [
    FactsComponent,
    FactsListComponent,
    FactDetailsComponent,
    FaqComponent,
    AskQuestionComponent,
    DateViewerComponent,
    Rx100Component,
    ClimateComponent,
    ProjectsComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    MercuryRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    SharedModule
  ]
})
export class MercuryModule { }
