import { Component,inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { addProduct,deleteProduct } from '../products.action';
import { selectAllProducts,selectTotalProducts } from '../products.selectors';
import { Product } from '../products.model';
import { ProductState } from '../products.reducer';
import { selectUrl,selectRouteParams } from '../../route.selectors';
import { RouterLink } from '@angular/router';
@Component({
  imports: [AsyncPipe,RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  private store=inject(Store<{
    products:ProductState
  }>)

  products$=this.store.select(selectAllProducts)
  total$=this.store.select(selectTotalProducts)

  url$=this.store.select(selectUrl)
  params$=this.store.select(selectRouteParams)

  addNewProducts(){
    const product:Product={
      id:Date.now(),
      title:'keyboard',
      price:8000,
       description: 'A keyboard for typing.'
    };
    this.store.dispatch(addProduct({product}))
  }
  removeProduct(id:number){
    this.store.dispatch(deleteProduct({id }))
  }
}
