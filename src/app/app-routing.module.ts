import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsViewComponent } from './views/about-us-view/about-us-view.component';
import { ContactUsViewComponent } from './views/contact-us-view/contact-us-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LfcViewComponent } from './views/lfc-view/lfc-view.component';


const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home' },
  { path: 'aboutus', component: AboutUsViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'contactus', component: ContactUsViewComponent },
  { path: 'lfc', component: LfcViewComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
