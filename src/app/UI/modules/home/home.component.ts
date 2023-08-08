import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/domain/models/Products/product';
import { ProductUseCase } from 'src/app/domain/models/usecase/product/productUseCase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor( private _productUseCase: ProductUseCase){}

  products!: Product[]

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this._productUseCase.getProducts().subscribe((data: ProductResponse) =>{
      this.products = data.products
    })
  }

}
