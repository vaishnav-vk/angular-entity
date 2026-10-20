import { createAction,props } from "@ngrx/store";
import { Product } from "./products.model";

export const addProduct=createAction(
    '[Products] add products',
    props<{product:Product}>()
)

export const deleteProduct=createAction(
    '[Products] delete products',
    props<{id:number}>()
)