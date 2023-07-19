import { UserGateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../../User/user';

@Injectable({
    providedIn:'root'
})
export class UserUseCase{
    //Metodos con logica de negocio de mi aplicacion

    constructor(private _userGateway: UserGateway){}

    login(email:string, password: string): Observable<User>{
        //Aplico todo lo referente a la lógica de mi aplicacion 
        return this._userGateway.login(email, password);
    }
}