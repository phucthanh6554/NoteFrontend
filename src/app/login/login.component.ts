import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {LoadingService} from '../loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string;
  email: string;
  password: string;

  constructor(private userservice : UserService, 
    private loadService : LoadingService,
    private router : Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.loadService.setLoad();
    this.userservice.login(this.email, this.password)
      .subscribe(data => {
        // Successfully login
        localStorage.setItem('JWT_token', data.body.token);
        this.router.navigate(['/notebook/list']);
      }, err => {
        if(err.status == 403)
        {
          this.loadService.stopLoad();
          alert('Loi dang nhap');
        }
      })
  }

}
