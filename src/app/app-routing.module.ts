import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';

//  CHILDREN
import { ADMIN_CHILDREN } from './components/admin/admin.routing.children';






const routes: Routes = [
  {path : 'home' , component: LoginComponent },
  {path : 'admin' , component: AdminComponent, children: ADMIN_CHILDREN },
  {path : 'reception' , component: ReceptionComponent },
  {path : 'warehouse' , component: WarehouseComponent },
  {path : '**' , pathMatch : "full" , component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
