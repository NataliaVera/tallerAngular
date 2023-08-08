import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concat, concatMap, delay, of, retry, retryWhen, take, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GenericService {
    constructor(private http: HttpClient) { 

    }
    //encargada de gestionar mi conexion a servicios

    public get<T> (url:string, endpoint:string, params?:string, headers?:HttpHeaders): Observable<T> {
        return this.http.get<T>(`${url}/${endpoint}`+ (params ?? ''),{headers}).pipe(
            retryWhen(errors => errors.pipe(
                concatMap((result:any) => {
                    if(result === 504){
                        return of(result)
                    }
                    return throwError(result)
                }), 
                delay(1000), 
                take(4), //Cantidad de veces que se reintenta
                o => concat(o, throwError('No fue posible conectarse con el servidor.'))
            )),
            catchError((err:HttpErrorResponse) =>{
                return this.handlerError(err)
            })
        )
    } 

    public post<T>(url:string, endpoint:string, model?:any, headers?:HttpHeaders): Observable<any>{
        return this.http.post<T>(`${url}/${endpoint}`, model, {headers})
    }


    handlerError(error: HttpErrorResponse){
        //Depende del tipo de error se hacen ciertas validaciones 
        if(error.error != null && error.error.message === 'No Auth'){
            localStorage.clear()
        }
        return throwError(error)
    }

}