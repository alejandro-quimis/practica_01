import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logueado: boolean;
  constructor(private authService: AuthService, private router: Router) {

   }

  ngOnInit() {
    if (this.authService.user !== null){
      this.logueado = true;
      console.log("construcion");
      console.log(this.logueado);
  } else if (this.authService.user === null){
    this.logueado = false;
    console.log(this.logueado);

  }
  }
  logout() {
    console.log("construcion");
    this.logueado = false;
    this.authService.logout();
    window.location.reload();
    this.router.navigate(['/']);
  }
  
  

}
