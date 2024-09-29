import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadedmoduleRoutingModule } from './lazyloadedmodule-routing.module';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';

@NgModule({
  declarations: [
    LazyCompComponent
  ],
  imports: [
    CommonModule,
    LazyloadedmoduleRoutingModule
  ]
})
export class LazyloadedmoduleModule { }
