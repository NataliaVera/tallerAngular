import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

constructor(private formBuilder: FormBuilder){}
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
    if(this.loginForm.valid){
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
