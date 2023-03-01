import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chaats } from 'src/app/Models/chaats';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class ChaatService {

  constructor(private http:HttpClient) { }

  req:string="https://localhost:44391/api/Menu";

 //Method to get the list of all players from the API.
 getAllUsers():Observable<chaats[]>
 {
   return this.http.get<chaats[]>(this.req);
 }

 //Method  to create a new player.
 createUser(chaat:chaats):Observable<chaats>
 {
   return this.http.post<chaats>(this.req,chaat,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 //Method to update an existing player.
 updateUser(id:number,chaat:chaats):Observable<any>
 {
   
   return this.http.put<any>(this.req+"/?id="+id,chaat,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }


 //Method to delete an existing player.
 deleteUser(id:number):Observable<any>
 {
   return this.http.delete<any>(this.req+"/?id="+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }

 //Method to test error handling.
 register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:44391/api/Menu')
           .pipe(catchError(this.manageError));
  }
  

  //Method to handle errors.
  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }

}
