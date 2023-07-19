import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/usergateway';
import { User } from 'src/app/domain/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserGateway{

  constructor(private http: HttpClient) { }

  login(email: String, password: String): Observable<User>{

    const headers= new HttpHeaders().set('Content-Type', 'application/json')

    return this.http.post<User>('https://dummyjson.com/auth/login',{username: 'kminchelle', password: '0lelplR'}, {headers})
  }
}
