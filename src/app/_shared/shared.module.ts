import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatButtonModule,
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
