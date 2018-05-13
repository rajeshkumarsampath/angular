import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input() user: any;
@Output() msg = new EventEmitter();

greetingMessage= 'Hello ! Welcome to Angular from Child Component';

  constructor() { }

  ngOnInit() {
      this.msg.emit(this.greetingMessage);
  }

}
