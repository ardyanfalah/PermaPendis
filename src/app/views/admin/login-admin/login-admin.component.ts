import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  @ViewChild('f') form : NgForm ; 


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  loginSubmit(){
    this.router.navigateByUrl('/dashboard');
  }

}
