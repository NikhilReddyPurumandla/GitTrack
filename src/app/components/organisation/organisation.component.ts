import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import { ChartsModule } from 'ng2-charts';
import {  Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
  orgname:string;
  org:any;
  x:string;
  member:any;
  constructor(private _githubService:GithubService){
    
}

  ngOnInit() {
 
  
  }
  getRes(){
    
    
     this._githubService.updateOrgname(this.orgname.split('/')[3]);
     console.log(this.orgname.split('/')[3]);
    this._githubService.getOrgRepos().subscribe(org => {
       this.org = org;
   });
   this._githubService. getMembers().subscribe(member=>{
    this.member=member;

    })
     }
     
    
 }

