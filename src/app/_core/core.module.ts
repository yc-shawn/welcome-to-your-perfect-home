import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, UtilService } from './services/';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UserService, UtilService]
})
export class CoreModule { }
