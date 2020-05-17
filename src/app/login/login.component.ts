import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string;
  email: string;
  password: string;

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }

  login(): void{
    console.log(this.email, this.password);
    this.userservice.login(this.email, this.password)
      .subscribe(data => {
        // Successfully login
        localStorage.setItem('JWT_token', data.body.token);
        alert('Dang nhap thanh cong');
      }, err => {
        if(err.status == 403)
          alert('Loi dang nhap');
      })
  }

}
