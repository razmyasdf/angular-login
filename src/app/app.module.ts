import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { RemeberMeComponent } from './Component/remeber-me/remeber-me.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RemeberMeComponent,
    HomeComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"forget-password",component:ForgetPasswordComponent},
      {path:"login",component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
