import { Observable } from "rxjs";
import { Product, ProductResponse } from "../product";


export abstract class ProductGateway {
    constructor() {
    }

    abstract getProducts(): Observable<ProductResponse>
}