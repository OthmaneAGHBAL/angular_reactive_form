import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm:FormGroup;

  constructor(){
      this.myForm = new FormGroup ({
      firstname: new FormControl('test'),
      lastname: new FormControl('test', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('test@gmail.com'),
      password: new FormControl('test'),
      country: new FormControl('1')
    });
  }
  
  onIint(){
    
  }

  onSubmit(){
      console.log("firstname ->" + this.myForm.value.firstname);
      console.log("lastname ->" + this.myForm.value.lastname);
      console.log("email ->" + this.myForm.value.email);
      console.log("password ->" + this.myForm.value.password);
      console.log("country ->" + this.myForm.value.country);
  }

}
