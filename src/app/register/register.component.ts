import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : string;
  email : string;
  password : string;

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }

  register() : void{
    this.userservice.register(this.name, this.email, this.password)
      .subscribe(data => {
        // Successfully login
        localStorage.setItem('JWT_token', data.body.token);
        alert('Dang ky thanh cong');
      },
      err => {
        alert('Co loi xay ra');
      })
  }

}
