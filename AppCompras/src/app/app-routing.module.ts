import { GuardsGuard } from './auth/guards.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { HomeComponent } from './static/home/home.component';
import { ListacompraComponent } from './components/listacompra/listacompra.component';
import { RegistrarcompraComponent } from './components/registrarcompra/registrarcompra.component';
import { ActualizarComponent } from './auth/actualizar/actualizar.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'listarcompras' , component: ListacompraComponent, canActivate: [GuardsGuard]},
  {path: 'registrarcompras' , component: RegistrarcompraComponent, canActivate: [GuardsGuard]},
  {path: 'actualizarusuario' , component: ActualizarComponent, canActivate: [GuardsGuard]},
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
