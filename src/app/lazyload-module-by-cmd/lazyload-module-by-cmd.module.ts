import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadModuleByCmdRoutingModule } from './lazyload-module-by-cmd-routing.module';
import { LazyloadModuleByCmdComponent } from './lazyload-module-by-cmd.component';


@NgModule({
  declarations: [
    LazyloadModuleByCmdComponent
  ],
  imports: [
    CommonModule,
    LazyloadModuleByCmdRoutingModule
  ]
})
export class LazyloadModuleByCmdModule { }
