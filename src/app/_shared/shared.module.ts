import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
];

const modules = [
  CommonModule,
  FormsModule,
  materialModules,
];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class SharedModule { }
