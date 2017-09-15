import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user= {
    name: 'Ganesh',
    id: 1
  };
  color= 'green';

  userList= [
    {id: 1, name: 'Ganesh'},
    {id: 2, name: 'Rajesh'},
    {id: 3, name: 'Sakthi'},
    {id: 4, name: 'mohan'},
    {id: 5, name: 'Rajeev'}
  ]

  link= 'http://google.com';
  imagepath= 'assets/angular.png'


  show(eventobj) {
    console.log('Show Called with' + eventobj.type);
  }



}
