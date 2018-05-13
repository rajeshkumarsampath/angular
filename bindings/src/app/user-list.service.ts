import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserListService {
getUserList= () => [
    {id: 1, name: 'Ganesh', country: 'India', region: 'East'},
    {id: 2, name: 'Rajesh', country: 'India', region: 'south'},
    {id: 3, name: 'Sakthi', country: 'USA', region: 'west'},
    {id: 4, name: 'mohan', country: 'USA', region: 'North'},
    {id: 5, name: 'Dhanalakshmi', country: 'USA', region: 'East'}
  ]

  constructor(private http: HttpClient) {}

  getGitusers() {
    return this.http.get('https://api.github.com/users');

  }

  postData() {
    return this.http.post('https://api.github.com/users', '')
  }




}
