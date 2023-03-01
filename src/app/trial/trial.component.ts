import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  firstnum:number;
  secondnum:number;
  result:number;

  constructor() {
    this.firstnum=0;
    this.secondnum=0;
    this.result=0;
   }

  ngOnInit(): void {
  }
  sum(a:string,b:string){
    this.result=Number(a)+Number(b);
    console.log(this.result);
  }

  Addnum():void{
    {{debugger}}
    this.result=this.firstnum+this.secondnum;
    console.log(this.result);
  }
}
