import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students= ['mary', 'john', 'peter'];
  isActive= false;

  display() {
      alert('display');
      this.isActive = true;
  }

  addstudent() {
    this.students.push('dhana');
  }



}
