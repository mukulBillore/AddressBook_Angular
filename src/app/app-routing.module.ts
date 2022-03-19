import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { InfoComponent } from './myComponents/info/info.component';
import { SignupComponent } from './myComponents/signup/signup.component';

const routes: Routes = [
  {path:"home", component:HomepageComponent},
  {path:"signup",component:SignupComponent},
  {path:"info",component:InfoComponent},
  {path:"update/:Id",component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
