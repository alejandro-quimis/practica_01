import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {  MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './static/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ListacompraComponent } from './components/listacompra/listacompra.component';
import { RegistrarcompraComponent } from './components/registrarcompra/registrarcompra.component';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { ActualizarComponent } from './auth/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ListacompraComponent,
    RegistrarcompraComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
    /*MatAutocompleteModule,
     MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule
  */],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
