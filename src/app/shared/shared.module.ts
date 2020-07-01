import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [DebugComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DebugComponent,
  ]
})
export class SharedModule { }
