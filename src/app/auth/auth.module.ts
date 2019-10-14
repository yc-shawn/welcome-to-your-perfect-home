import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthLoginComponent } from './auth-login/auth-login.component';


@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthLoginComponent }])
  ]
})
export class AuthModule { }
