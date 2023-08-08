import { Injectable } from '@angular/core';
import { GenericService } from '../helpers/generic.service';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from 'src/app/domain/models/Products/product';
import { ProductGateway } from 'src/app/domain/models/Products/gateway/productgateway';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductGateway{

  constructor(private genericService: GenericService) {
    super()
   }

  _url = 'https://dummyjson.com'

  getProducts(): Observable<ProductResponse>{
    return this.genericService.get<ProductResponse>(this._url, 'products')
  }

}
