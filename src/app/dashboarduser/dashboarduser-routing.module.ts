import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarduserComponent } from './dashboarduser.component';

const routes: Routes = [{ path: '', component: DashboarduserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarduserRoutingModule { }
