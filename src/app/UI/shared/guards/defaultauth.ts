import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

//Defiinir una clase inyectable 
@Injectable({
    providedIn: 'root'
})

export class Defaultauth implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var token = localStorage.getItem('token');

        ///LLamamos un servicio que nos indique si el toquen que tenemos es valido o ejecutar una clase 
        if(token){
            return true; 
        }else{
            this.router.navigate(['/fullscreen/login'])
             return false;
        }

        console.log('Estoy en el guardia')
    }

}
