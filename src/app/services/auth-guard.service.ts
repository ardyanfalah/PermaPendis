import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SweetAlert } from '../utilities/sweetalert'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    private sweetalert:SweetAlert,
    private modalService: NgbModal
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const stateNav = state.url;
    const path = route.url[0].path.replace('/', '');
    if (path === 'login') {
      if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('/beranda');
        return false;
      } else {
        return true;
      }
    } else {
      if (!this.auth.isAuthenticated()) {
        if (path.lastIndexOf('verify', 0) === 0) {
          return true;
        }
        this.modalService.dismissAll();
        this.router.navigateByUrl('/login');
        this.sweetalert.showError("Mohon Login Terlebih Dahulu")
      }
    }
    return true;
  }

}
