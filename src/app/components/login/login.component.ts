import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GithubService} from '../../services/github.service';
import { ChartsModule } from 'ng2-charts';
import {  Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  moduleId:module.id,
  
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GithubService,AuthenticationService],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  
  loading = false;
  form;  
 email:string;
username:string;
user:any=[];
  
constructor(private route: ActivatedRoute,
  private router: Router,private githubService:GithubService, private authenticationService: AuthenticationService) {
 }

ngOnInit() {
  this.form = new FormGroup({
    email : new FormControl("", Validators.required),
    username : new FormControl("", Validators.required),

  });
  this.authenticationService.logout();
}

onSubmit = function(event){
  //event.email= this.email;
  //event.password=this.password;
  this.githubService.addMember(event);
  console.log(event);

 };
 onSubmits = function(event){

console.log(event.email);
 this.loading = true;
 this.authenticationService.login(event)
     .subscribe(result => {
         if (result === true) {
             console.log(result);
             console.log("path for ", result ,"is ./status");
             // login successful
            
             this.router.navigate(['/status'])
         } else {
             // login failed
             this.error = 'Username or password is incorrect';
             this.loading = false;
          
             this.router.navigate(['./login']);
         }
     }, error => {
       this.loading = false;
       this.error = error;          
     });
  console.log(event);

 };


}
