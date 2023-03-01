import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrialComponent } from './trial/trial.component';
import { ChaatsComponent } from './chaats/chaats.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinksComponent } from './drinks/drinks.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { TyComponent } from './ty/ty.component';



export function tokenGet() {
  return localStorage.getItem("jwt");

}

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    ChaatsComponent,
    DrinksComponent,
    LoginComponent,
    BuyComponent,
    TyComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, JwtModule.forRoot({
      config: {
        tokenGetter:tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
