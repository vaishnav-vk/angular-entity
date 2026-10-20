import { createReducer,on } from "@ngrx/store";
import { addProduct,deleteProduct } from "./products.action";
import { Product } from "./products.model";
import { createEntityAdapter,EntityState } from "@ngrx/entity";

export interface ProductState extends EntityState<Product>{}

export const adapter=createEntityAdapter<Product>()

export const initialState = adapter.setAll(
  [
    {
      id: 1,
      title: 'Laptop',
      price: 55000,
      description: 'A laptop for work and study.'
    },
    {
      id: 2,
      title: 'Mobile',
      price: 20000,
      description: 'A smartphone for everyday use.'
    },
    {
      id: 3,
      title: 'Headphones',
      price: 2500,
      description: 'Headphones for listening to music.'
    }
  ],
  adapter.getInitialState()
);

export const productReducer=createReducer(
    initialState,
    on(addProduct,(state,{product})=>
    adapter.addOne(product,state)
),
    on(deleteProduct, (state, { id }) =>
    adapter.removeOne(id, state)
  )
)