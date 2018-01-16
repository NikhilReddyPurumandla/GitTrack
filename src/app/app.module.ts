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
import {AuthenticationService} from '../app/services/authentication.service';
import {CanActivateAuthGuard} from './can-activate.authguard';
import { LogoutComponent } from './components/logout/logout.component'
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
     path: 'status', 
     component: StatusComponent,
     canActivate: [CanActivateAuthGuard]
    },
  { 
    path: 'github', 
    component: GithubComponent,
    canActivate: [CanActivateAuthGuard]
   },
  {
     path: 'organisation', 
     component: OrganisationComponent,
     canActivate: [CanActivateAuthGuard]
    },
   
  {
     path: 'login', 
     component: LoginComponent
    },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [CanActivateAuthGuard]
    },
  {
    path:'',
    redirectTo:'/status',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule,ChartsModule,TagInputModule, RouterModule.forRoot(routes),  ReactiveFormsModule],
  declarations: [ AppComponent, GithubComponent, StatusComponent, OrganisationComponent, LoginComponent,LogoutComponent ],
  providers: [GithubComponent,StatusComponent,OrganisationComponent, LoginComponent,LogoutComponent, AuthenticationService, CanActivateAuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }