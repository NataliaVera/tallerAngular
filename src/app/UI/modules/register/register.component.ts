import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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


constructor(private formBuilder: FormBuilder){}
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
  if(this.registerForm.valid){
    alert('Formulario válido')
  }else{
    alert('No es válido')
  }
}


public get control(){
  return this.registerForm.controls;
}

}
