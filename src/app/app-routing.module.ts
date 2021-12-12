import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {LoginComponent} from "./Component/login/login.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"forget-password",component:ForgetPasswordComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
