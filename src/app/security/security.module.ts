import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SecurityComponent } from './security.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [SecurityComponent, LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class SecurityModule { }
