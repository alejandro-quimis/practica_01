import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Router, CanActivate } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup ;
  public user: any;
  login: boolean;

  constructor(private router: Router , public _userService: UsuarioService, public _auth: AuthService ) {
    this.login = false;
    this.formulario = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    });
    _userService.lista().subscribe((e: any) => {
      this.user = e;
   }, (error: any) => {
      console.log(error.name);
    });
  }

  submit() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      // tslint:disable-next-line: max-line-length
      /*if (this.user[i].nombre === this.formulario.get('usuario').value && 
      this.user[i].contrasena ===   this.formulario.get('contrasena').value) {
        this.login = true;
        this._auth.login();
        break;
      }*/
      if (this._auth.login(
        this.user[i].nombre,
        this.formulario.get('usuario').value,
        this.user[i].contrasena,
        this.formulario.get('contrasena').value)) {
          this.login = true;
          this.router.navigate['/registro'];
          break;
        }
    }

    
  }

  obtenersesion(){
      if (this._auth.geUserLogin() === null) {
        console.log(this._auth.geUserLogin());
        return false;

      }
  }
  ngOnInit(){
  }
}
