import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { RegisterComponent } from './UI/modules/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultComponent, 
    children:[
      {path:'', component: HomeComponent}
    ]
  },
  {
    path:'fullscreen',
    component:FullscreenComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
