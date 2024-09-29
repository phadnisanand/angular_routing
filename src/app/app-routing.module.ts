//import { ProductDetailsComponent } from './ProductDashboard/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Homechild1Component } from './home/homechild1/homechild1.component';
import { Homechild2Component } from './home/homechild2/homechild2.component';
import { Homechild3Component } from './home/homechild3/homechild3.component';
import { CanactivatedemoGuard } from './canactivatedemo.guard';
import {CandeactivatedemoGuard} from './candeactivatedemo.guard';
import { CanloaddemoGuard } from './canloaddemo.guard';
import { CanchildguarddemoGuard } from './canchildguarddemo.guard';
import { CanmatchguarddemoGuard } from './canmatchguarddemo.guard';
import { TemplatedemoComponent } from './templatedemo/templatedemo.component';
import { DetailsComponent } from './product-dashboard/details/details.component';

const routes: Routes = [
  { path: '' ,
    component: HomeComponent,
    canActivateChild: [CanchildguarddemoGuard],
    children: [
      {
        path:'homechild1', component: Homechild1Component
      },
      {
        path:'homechild2', component: Homechild2Component
      },
      {
        path:'homechild3', component: Homechild3Component
      }
   ]
  },
  {path: 'about' , component: AboutComponent, canActivate: [CanactivatedemoGuard] },
  {path: 'featured' , component: DetailsComponent},
  {path: 'contact' , component: ContactComponent, canDeactivate: [CandeactivatedemoGuard]},
  {path: 'lazyloadcomp',  canLoad: [CanloaddemoGuard], loadChildren: () => import('./lazyloadedmodule/lazyloadedmodule.module').then(m => m.LazyloadedmoduleModule) },
  {path: 'lazyloadbycmd', canLoad: [CanloaddemoGuard], loadChildren: () => import('./lazyload-module-by-cmd/lazyload-module-by-cmd.module').then(m => m.LazyloadModuleByCmdModule) },
  { path: 'dashboard',  canMatch: [CanmatchguarddemoGuard], loadChildren: () => import('./dashboardadmin/dashboardadmin.module').then(m => m.DashboardadminModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboarduser/dashboarduser.module').then(m => m.DashboarduserModule) },
  {path: 'templatedemo' , component: TemplatedemoComponent}
  // {path: 'lazyloadcomp',  canLoad: [CanloaddemoGuard], loadChildren: () => import('./lazyloadedmodule/lazyloadedmodule.module').then(m => m.LazyloadedmoduleModule) },
  // {path: 'lazyloadbycmd', canLoad: [CanloaddemoGuard], loadChildren: () => import('./lazyload-module-by-cmd/lazyload-module-by-cmd.module').then(m => m.LazyloadModuleByCmdModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
