import {Injectable} from '@angular/core';
import {Http, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private sdate='';
    private edate='';
    private orgname='';
    private orgrepo='';
    private username = '';
    private repo='';
    private date='';
    private client_id = '41b7681364679e30d325';
    private client_secret='c32185af65cee9f03f1622e973f9840496e0c80c';
    private user='';
    private pass='';
   
    constructor(private _http:Http){
     
    }
    
    getUser(){
  
        
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    updateUser(user:string){
        this.user=user;
    }
    updatePass(pass:string){
        this.pass=pass;
    }
    updateUsername(username:string){
        this.username = username;
    }
    updateRepo(repo:string){
       this.repo = repo;
    }
    updateSdate(sdate:string){
        this.sdate = sdate;
    }
    updateEdate(edate:string){
        this.edate = edate;
    }
    
    updateOrgname(orgname:string){
        this.orgname = orgname;
    }
    updateOrgrepo(orgrepo:string){
        this.orgrepo = orgrepo;
    }
    getContributors(){
         return this._http.get( 'https://api.github.com/repos/'+this.username +'/'+this.repo+'/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
         .map(res => res.json())
    }
    getCommits() {
        
            return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/commits?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
            
    }
    getBranches() {
            
                return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/branches?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json())
    }

    getDate() {

            return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/commits?since=' + this.date+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    getGraph(){
        return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())
    }
    getOrgRepos(){
        return this._http.get('https://api.github.com/orgs/' + this.orgname + '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()) 
       
    }
    getDateCommits(){
       
        return this._http.get('https://api.github.com/repos/' + this.username + '/' + this.repo + '/commits?since='+this.sdate+'&until='+this.edate+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()) 
    }
    getLang(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/languages?since='+this.sdate+'&until='+this.edate+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())
    }
    getC(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/stats/punch_card?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())   
    }
    getP(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/stats/participation?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())   
    }
    getYear(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/stats/commit_activity?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())   
    }
    getLog(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/stats/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())    
    }
    getLogs(){
        return this._http.get('https://api.github.com/repos/'+ this.orgname+'/'+this.orgrepo+'/stats/contributors?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())    
    }
    getCon(){
        return this._http.get('https://api.github.com/repos/'+ this.username+'/'+this.repo+'/stats/commit_activity?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json()) 

    }
    getMembers(){
        return this._http.get('https://api.github.com/orgs/' + this.orgname + '/members?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())  
    }
    addMember(event){
        console.log("backend name",event.email);
        console.log("backend password",event.username);
        return this._http.post('http://localhost:8080/git/addUser',event)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );
    }
    login(event){
        console.log("login name",event.email);
        console.log("login password",event.username);
        return this._http.post('http://localhost:8080/git/getLogin',event)
        .subscribe(
          res => {
            console.log(res);
            console.log("logged in with username ",event.email," and password ",event.username);
          },
          err => {
            console.log("Error occured");
          }
        );
    }

    addRepo(event){
        console.log("adding repo ",event);
        return this._http.post('http://localhost:8080/git/addRepo',event)
        .subscribe(
          res => {
            console.log(res);
            console.log("added repo",event);
          },
          err => {
            console.log("Error occured");
          }
        );
    }
    
    getRepo(){
        return this._http.get('http://localhost:8080/git/getRepo')
        .map(res => res.json())  
    }
    deleteRepo(repo){
        console.log("service delete",repo);
        return this._http.delete('http://localhost:8080/git/deleteRepo/'+repo)
        .subscribe(
            res => {
              console.log(res);
              console.log("deleted repo",repo);
            },
            err => {
              console.log("Error occured");
            }
          );   
          
    }
    
}