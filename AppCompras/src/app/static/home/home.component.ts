import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  logueado: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.logueado = false;
  }

  ngOnInit() {
    //aqui me esto verificando si existe el usuario y la variable booleana la uso para ocultar el elemento
    if (this.authService.user != null) {
      this.logueado = true;
    } else if (this.authService.user === null) {
      this.logueado = false;
    }
  }
  logout() {
    this.logueado = false;
    this.authService.logout();
    window.location.reload();
    this.router.navigate(["/"]);
  }
}
