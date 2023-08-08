import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/usergateway';
import { User } from 'src/app/domain/models/User/user';
import { GenericService } from '../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserGateway{

  constructor(private genericService: GenericService) { }

  _url = 'https://dummyjson.com'

  login(email: String, password: String): Observable<User>{

    const headers= new HttpHeaders().set('Content-Type', 'application/json')

    return this.genericService.post<User>(this._url, ' auth/login', {username: 'kminchelle', password: '0lelplR'})
  }
}
