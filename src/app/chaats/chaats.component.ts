import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { chaats } from 'src/app/Models/chaats';
import { ChaatService } from '../Services/chaat.service';

@Component({
  selector: 'app-chaats',
  templateUrl: './chaats.component.html',
  styleUrls: ['./chaats.component.css']
})
export class ChaatsComponent implements OnInit {
 //Array to store the player objects.
 chat:chaats[]=[];

 //Player object to be used in forms.
 chaats:chaats ={
   cid:0,
   cname: "",
  
   cprice: 0,
   cimage: ""
 };
 postuser:chaats={
  cid:0,
  cname:"",
  cimage:"",
  cprice:0,
  
};
 msg:string="";
 flag:boolean=false;



 //Injecting Player service inside this component.
 constructor(private router:Router, private obj:ChaatService,private jwtHelper:JwtHelperService)
 {
 }
 
  ngOnInit(): void 
  {
   
    
      this.obj.getAllUsers().subscribe(data=>{
        this.chat=data;
        //this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
        //Logging the response recieved from web api.
        console.log(this.chat);
      })
    
  }

 

  delete_api(id:number):void
  {
    {{debugger}}
    this.obj.deleteUser(id).subscribe(data=>{
      this.msg="Deleted";
      alert(this.msg);
    })
    
  }
  post_api(chat:chaats):void{
    this.obj.createUser(chat).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
  }
  put_api(id:number,chat:chaats,):void
  {
    this.obj.updateUser(id,chat).subscribe(data=>{
        this.msg="Updated"
      }
    );
    console.log(this.msg);
  }
  Move():void{
    this.router.navigate(['/drink-api']);
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