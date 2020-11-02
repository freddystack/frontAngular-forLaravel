import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';






// SERVICIOS 
import { ServiceApiService } from './services/service-api.service';
import { LoginService } from './services/login.service';
import { TokenInterceptorService } from './services/token-interceptor.service';


// COMPONENTS
import {LoginComponent} from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ListaUserComponent } from './components/admin/lista-user/lista-user.component';
import { BuscarUsuarioComponent } from './components/admin/buscar-usuario/buscar-usuario.component';

import { ListProductsComponent } from './components/list-products/list-products.component';


// PIPES 
import { FiltrarPipe } from './pipes/filtrar.pipe';
import { FilProductPipe} from './pipes/fil-product.pipe';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { FacturesComponent } from './components/admin/factures/factures.component';
import { ReportComponent } from './components/admin/report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    ReceptionComponent,
    WarehouseComponent,
    RegisterComponent,
    ListaUserComponent,
    BuscarUsuarioComponent,
    FiltrarPipe,
    ListProductsComponent,
    FilProductPipe,
    CategoriesComponent,
    FacturesComponent,
    ReportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceApiService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
