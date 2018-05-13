import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {

  duration= 150;
  durationInHour: number;
  durationInMinutes: number;
  displayDuration= false;

  userDetails: FormGroup;
  constructor() {
    this.userDetails = new FormGroup({
      firstName: new FormControl('Dhanalakshmi', Validators.required),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    })

   }

  formSubmit() {
      console.log(this.userDetails.value);
      console.log(this.userDetails.valid);
  }

  ngOnInit() {
    this.durationInHour = Math.floor(this.duration / 60);
    this.durationInMinutes = this.duration % 60;

  }
  getDuration() {
      this.displayDuration = true;
      this.duration = (this.durationInHour * 60) + (this.durationInMinutes)
  }

}
