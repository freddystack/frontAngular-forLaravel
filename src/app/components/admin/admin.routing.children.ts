import { Routes} from '@angular/router';

// COMPONENTES HIJOS DE ADMIN
import { RegisterComponent } from './register/register.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { CategoriesComponent } from './categories/categories.component';
import { FacturesComponent } from './factures/factures.component';
import { ReportComponent } from './report/report.component';
import { ListProductsComponent } from '../list-products/list-products.component';


export const ADMIN_CHILDREN :Routes =[
  {path : "register/:id", component: RegisterComponent },
  {path : "userList", component: BuscarUsuarioComponent },
  {path : "productsList", component: ListProductsComponent },
  {path : "categoriesList", component: CategoriesComponent },
  {path : "facturesList", component: FacturesComponent },
  {path : "report", component: ReportComponent },
  {path : "**" , pathMatch: "full", component: RegisterComponent }

]