import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github/github.component';
import { StatusComponent } from './components/status/status.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { LoginComponent } from './components/login/login.component';
import { TagInputModule } from 'ngx-chips';

const routes: Routes = [
  { path: 'status', component: StatusComponent},
  { path: 'github', component: GithubComponent },
  { path: 'organisation', component: OrganisationComponent},
  { path: 'login', component: LoginComponent},
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule,ChartsModule,TagInputModule, RouterModule.forRoot(routes),  ReactiveFormsModule],
  declarations: [ AppComponent, GithubComponent, StatusComponent, OrganisationComponent, LoginComponent ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }