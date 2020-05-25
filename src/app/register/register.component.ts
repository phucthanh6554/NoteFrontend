import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {LoadingService} from '../loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : string;
  email : string;
  password : string;

  constructor(private userservice : UserService, private loadingservice : LoadingService) { }

  ngOnInit(): void {
  }

  register() : void{
    this.loadingservice.setLoad(); // display loader
    this.userservice.register(this.name, this.email, this.password)
      .subscribe(data => {
        // Successfully login
        localStorage.setItem('JWT_token', data.body.token);
        alert('Dang ky thanh cong');
      },
      err => {
        this.loadingservice.stopLoad();
        alert('Co loi xay ra');
      })
  }

}
