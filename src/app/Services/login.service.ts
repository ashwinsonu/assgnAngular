import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export default class LoginService {


  constructor(private http:HttpClient) { }

  req:string="https://localhost:44311/api/Auth";

 //Method to get the list of all players from the API.
 Login(Login:login):Observable<any>
 {
   return this.http.post(this.req,Login,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Accept':'text/html,application/xhtml+xml, */*'
      }),responseType:'text'
    }
    )};
}


