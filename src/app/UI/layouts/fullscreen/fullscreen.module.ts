import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen.component';
import { LoginComponent } from '../../modules/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


//Administrador de todos los componentes o vistas
@NgModule({
  declarations: [
    FullscreenComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FullscreenModule { }
