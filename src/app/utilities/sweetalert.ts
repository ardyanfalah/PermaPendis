import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class SweetAlert {
    constructor() {}

    showSuccess(messages, timer = 0) {
        if (timer > 0) {
          Swal.fire({
              icon: 'success',
              text: messages,
              timer: timer,
          })
        } else {
          Swal.fire({
            icon: 'success',
            text: messages,
        })
        }
    }
    
    showError(messages) {
        Swal.fire({
          text: messages,
          icon: 'error'
        });
    }

    showWarning(messages) {
      Swal.fire({
        text: messages,
        icon: 'warning'
      });
  }
    
    showConfirm(title, messages) {
        return Swal.fire({
          title: title,
          text: messages,
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Batal',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        });
      }

}