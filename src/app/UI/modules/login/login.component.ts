import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserUseCase } from 'src/app/domain/models/usecase/user/userUseCase';
import { User } from 'src/app/domain/models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
//Definir los formularios 
//OnInit -> Se ejecuta durannte la inicializacion del componente

loginForm!: FormGroup;
public validationMessages ={
  email: [
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'email', message: 'Este campo es requerido'},
  ], 
  password: [
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'},
  ]
}

constructor(private formBuilder: FormBuilder, private router: Router, private _userUseCase: UserUseCase){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {//Validaciones
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]

        ],
        password:[
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
          ]
        ]
      }
    )
  }

  login(){
    //Consumir un servicio 

    var email = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;

    if(this.loginForm.valid){
      //Almacenar informacion en el navegador 

      this._userUseCase.login(email, password).subscribe((response:User)=>{
        localStorage.setItem('token', response.token);
        this.router.navigate(['/'])
      })
    
      alert('Formulario válido')
    }else{
      alert('No es válido')
    }
  }

public get c(){
  //retorna los campos del formulario
  return this.loginForm.controls;
}

}
