import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'

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

constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient){}
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

    this.http.get('https://dummyjson.com/products')
      .subscribe((data:any) =>{
        console.log(data);
      })

      const headers= new HttpHeaders().set('Content-Type', 'application/json')

      this.http.post('https://dummyjson.com/auth/login', {username: 'kminchelle', password: '0lelplR'}, {headers})
      .subscribe((data:any) =>{
        console.log(data);
      })


    if(this.loginForm.valid){
      //Almacenar informacion en el navegador 
      
      localStorage.setItem('token', email + password);

      this.router.navigate(['/'])

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
