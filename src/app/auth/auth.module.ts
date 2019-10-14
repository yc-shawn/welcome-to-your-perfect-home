import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/_shared/shared.module';

import { AuthLoginComponent } from './auth-login/auth-login.component';


@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthLoginComponent }])
  ]
})
export class AuthModule { }
