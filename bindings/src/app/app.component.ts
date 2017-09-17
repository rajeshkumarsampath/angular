import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedUser:any;
  greetingMsgFromChild:string;
  gitUserList:any;
  user= {
    name: 'Ganesh',
    id: 1
  };
  color= 'green';

  

  link= 'http://google.com';
  imagepath= 'assets/angular.png'


  show(eventobj) {
    console.log('Show Called with' + eventobj.type);
  }

  select(user){
    this.selectedUser=user;
  }

  userList=this.userlist.getUserList();


  constructor (private userlist:UserListService) {}

  getGreetingMsg(message) {
    this.greetingMsgFromChild=message;
  }
  gitUserInfo(){
    this.userlist.getGitusers().subscribe((res)=>{
      this.gitUserList=res;
    })
  }
  
  ngOnInit(){
    this.gitUserInfo();
  }


}
