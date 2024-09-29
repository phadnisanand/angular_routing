import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadModuleByCmdComponent } from './lazyload-module-by-cmd.component';

const routes: Routes = [{ path: '', component: LazyloadModuleByCmdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadModuleByCmdRoutingModule { }
