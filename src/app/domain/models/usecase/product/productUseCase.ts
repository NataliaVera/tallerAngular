import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProductGateway } from '../../Products/gateway/productgateway';
import { ProductResponse } from '../../Products/product';

@Injectable({
    providedIn:'root'
})
export class ProductUseCase{
    //Metodos con logica de negocio de mi aplicacion

    constructor(private _productGateway: ProductGateway){}

    getProducts(): Observable<ProductResponse>{
        //Aplico todo lo referente a la lógica de mi aplicacion 
        return this._productGateway.getProducts();
    }
}