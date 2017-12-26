import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import { ChartsModule } from 'ng2-charts';
import {  Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  moduleId:module.id,
  
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GithubService],
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
  
  
form;  
 mail:string;
pass:string;
user:any=[];
  
  constructor(private _githubService:GithubService){
    
}

ngOnInit() {
}
this.form = new FormGroup({
  email : new FormControl("", Validators.required),
  password : new FormControl("", Validators.required),
 
});
onSubmit = function(event){
  event.maiil= this.mail;
  event.password=this.pass
  this.eventservice.addUser(event);
  console.log(event);
 };


}
