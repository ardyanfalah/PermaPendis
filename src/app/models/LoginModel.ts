export class LoginModel {
    username: string = '';
    password: string = '';
  
    static defaultData() {
      return {
        username: '',
        password: ''
      };
    }
  }
  