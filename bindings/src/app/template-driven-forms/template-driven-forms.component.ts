import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  user:Object={};
  firstName="Mohan";

  constructor() { }

  formSubmit(formData:any){
      console.log(formData);
      console.log(formData.value);
  }

  ngOnInit() {
  }

}
