import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formulario: FormGroup=
  this.fb.group({
    email:['null'],
    password:['null'],
  });

  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(){
  
  }

  onSubmit(){
    console.log(this.formulario.value);
  }


}
