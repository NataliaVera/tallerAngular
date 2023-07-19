import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

registerForm! : FormGroup;

public validationMessages = {
  name:[
    {type: 'required', message: 'Este campo es requerido'}
  ],
  email:[
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'email', message: 'Este campo es requerido'}
  ],
  password:[
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'},

  ],
  repeatPassword:[
    {type: 'required', message: 'Este campo es requerido'},
    {type: 'pattern', message: 'Este campo debe contener 1 mayuscula, 1 minuscula y minimo 8 caracteres'},
    {type: 'notSame', message: 'Este campo debe ser igual a password '},
  ]
}


constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient){}
ngOnInit(): void {
  this.registerForm = this.formBuilder.group(
    {
      name:[
        '',
        [
          Validators.required
        ]
      ],
      email:[
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
      ], 
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
        ]
      ]
    }, {validator : this.checkPasswords}
  )
}

checkPasswords(group: FormGroup){
  let password = group.controls['password'].value;
  let confirmPassword = group.controls['repeatPassword'].value;
  return password === confirmPassword ? null : {notSame : true }
}

register(){

  var name = this.registerForm.controls['name'].value;
  var email = this.registerForm.controls['email'].value;
  var password = this.registerForm.controls['password'].value;
  var repeatPassword = this.registerForm.controls['repeatPassword'].value;

  const headers= new HttpHeaders().set('Content-Type', 'application/json')

  this.http.post('https://dummyjson.com/users/add', {name: 'Natalia', email: 'a@a.com', password: 'Na520741', repeatPassword: 'Na520741'}, {headers})
  .subscribe((data: any) =>{
    console.log(data);
  })

  if(this.registerForm.valid){
    localStorage.setItem('token', name + email + password + repeatPassword)

    this.router.navigate(['/'])

    alert('Formulario válido')
  }else{
    alert('No es válido')
  }
}


public get control(){
  return this.registerForm.controls;
}

}
