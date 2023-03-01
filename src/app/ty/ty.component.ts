import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ty',
  templateUrl: './ty.component.html',
  styleUrls: ['./ty.component.css']
})
export class TyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Move():void{
    this.router.navigate(['/test-api']);
  }
}
