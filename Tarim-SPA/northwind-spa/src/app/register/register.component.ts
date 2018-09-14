import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  registerForm:FormGroup;
  registerUser:any;
  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required, Validators.minLength(4), Validators.maxLength(19)],
      passwordConfirm:["",Validators.required, Validators.minLength(4), Validators.maxLength(19)]
    },
     {
      validator:this.passwordMatchValidator
    })
  }

  passwordMatchValidator(g:FormGroup){
    return g.get("password").value===g.get("passwordConfirm").value ? null : {mismatch:true};
  }

  register() {
    alert("register");
  }

}
