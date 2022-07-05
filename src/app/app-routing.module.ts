import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactsComponent } from './mercury/facts/facts.component';
import { MercuryModule } from './mercury/mercury.module';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
