import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    private router: Router,
  ) { }
  
  loginSubmit(){
    this.router.navigateByUrl('/dashboard');
  }

 }
