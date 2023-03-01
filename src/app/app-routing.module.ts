import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChaatsComponent } from './chaats/chaats.component';
import { DrinksComponent } from './drinks/drinks.component';

import { TrialComponent } from './trial/trial.component';
import { BuyComponent } from './buy/buy.component';
import { TyComponent } from './ty/ty.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'Trial',component:TrialComponent},
  {path:'test-api',component:ChaatsComponent},
  {path:'drink-api',component: DrinksComponent},
  {path:'Buy',component:BuyComponent},
  {path:'Ty',component:TyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
