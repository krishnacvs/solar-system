import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ClimateComponent } from './fact-details/climate/climate.component';
import { FactDetailsComponent } from './fact-details/fact-details.component';
import { ProjectsComponent } from './fact-details/projects/projects.component';
import { FactsListComponent } from './facts-list/facts-list.component';
import { FactsComponent } from './facts/facts.component';
import { FaqComponent } from './faq/faq.component';
import { Rx100Component } from './rx100/rx100.component';

const routes: Routes = [{
  path:'mercury', 
  children: [
    {
      path: 'list',
      component: FactsListComponent
    },
    {
      path: 'details',
      component: FactDetailsComponent
    },
    {
      path: 'climate/details',
      component: ClimateComponent
    },
    {
      path: 'project/details',
      component: ProjectsComponent
    },
    {
      path: 'add',
      component: FactsComponent
    },
    {
      path: 'question',
      component: AskQuestionComponent
    },
    {
      path: 'faq',
      component: FaqComponent
    },
    {
      path: 'rx100/:id',
      component: Rx100Component
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercuryRoutingModule { }
