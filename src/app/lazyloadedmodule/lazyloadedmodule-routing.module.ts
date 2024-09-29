import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
const routes: Routes = [
  {path: '' , component: LazyCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadedmoduleRoutingModule { }
