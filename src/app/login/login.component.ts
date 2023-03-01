import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../Models/login';
import LoginService from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:login={
  name:"",
  password:""
}
  constructor(private router:Router, private obj:LoginService) { }

  ngOnInit(): void {
  }
post_api(Login:login):void 
{
  this.obj.Login(Login).subscribe(data=>
  {
{debugger}
const token=data;
localStorage.setItem("jwt",token);
this.router.navigate(['/test-api'])
  })
}
}
