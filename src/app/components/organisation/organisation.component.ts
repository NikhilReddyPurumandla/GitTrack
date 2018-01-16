import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import { ChartsModule } from 'ng2-charts';
import {  Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css'],
  providers:[GithubService],
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
export class OrganisationComponent implements OnInit {
  form;
  form1;
  repo:any;
  orgname:string;
  orgrepo:string;
  org:any;
  x:string;
  member:any;
  log:any;
  a:any=[];
  giturl:any;
  constructor(private _githubService:GithubService){
    this._githubService.getRepo().subscribe(repo => {
      this.repo = repo;
      console.log("repos list",repo);
    
    }); 
}

  ngOnInit() {
    this.form = new FormGroup({
      repo : new FormControl("", Validators.required),
    });
    this.form1 = new FormGroup({
      usernames : new FormControl("", Validators.required),
      
        });
    
    
  
  }
  onSubmit = function(event){
    console.log(event);
    this._githubService.addRepo(event);
   
    this._githubService.getRepo().subscribe(repo => {
      this.repo = repo;
    })
  };
  
  click(event){
  console.log("event",event);
    let a= document.getElementById("usernames").getAttribute("value");
    document.getElementById("usernameid").setAttribute("value",event);
    document.getElementById('id01').style.display='none';
  
  }
  
  
delete(repo){
  console.log("to be deleted event",repo.id);
  if(confirm("Do you really want to delete ?")){
  this._githubService.deleteRepo(repo)


    //location.reload();
    document.location.reload(false);
  }
  }
  
  getRes(){
    this.giturl=document.getElementById("usernameid").getAttribute("value");
     this._githubService.updateOrgname(this.giturl.split('/')[3]);
     this._githubService.updateOrgrepo(this.giturl.split('/')[4]);
 
     console.log(this.giturl.split('/')[3]);

     console.log(this.giturl.split('/')[4]);
    this._githubService.getOrgRepos().subscribe(org => {
       this.org = org;
       
   });
   this._githubService. getMembers().subscribe(member=>{
    this.member=member;

    })
    this._githubService.getLogs().subscribe(log=>{
      this.log=log;
  
      })
     }
     
    
 }

