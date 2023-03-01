import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Drinks } from '../Models/Drinks';
import { DrinkService } from '../Services/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
//Array to store the player objects.
drnk:Drinks[]=[];

//Player object to be used in forms.
Drinks:Drinks ={
  did:0,
  dname: "",
 
  dprice: 0,
  dimage: ""
};

msg:string="";
 flag:boolean=false;




//Injecting Player service inside this component.
constructor(private router:Router,private obj:DrinkService,private jwtHelper:JwtHelperService)
{
}


 ngOnInit(): void {
  this.obj.getAllUsers().subscribe(data=>{
    this.drnk=data;
    //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
    //Logging the response recieved from web api.
    console.log(this.drnk);
  });
 }
 delete_api(id:number):void
  {
    {{debugger}}
    this.obj.deleteUser(id).subscribe(data=>{
      this.msg="Deleted";
      alert(this.msg);
    })
    
  }
post_api(drnk:Drinks):void{
     this.obj.createUser(drnk).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
 }
put_api(id:number,drnk:Drinks,):void
      {
        this.obj.updateUser(id,drnk).subscribe(data=>{
            this.msg="Updated"
          }
        );
        console.log(this.msg);
      }
Move():void{
        this.router.navigate(['/test-api']);
      }
Buy():void{
        this.router.navigate(['/Buy']);
      }
IsAuthendicated():boolean{
        const token:string|null=localStorage.getItem("jwt");
        if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
Logout():void{
        localStorage.removeItem("jwt");
        this.router.navigate(['/login']);
      }



}


