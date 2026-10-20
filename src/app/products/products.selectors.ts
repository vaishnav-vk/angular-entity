import { createFeatureSelector } from "@ngrx/store";
import { adapter,ProductState } from "./products.reducer";

export const selectProductState=
createFeatureSelector<ProductState>('products')

export const {
    selectAll:selectAllProducts,
    selectTotal:selectTotalProducts,
    selectEntities:selectProductEntities
}=adapter.getSelectors(selectProductState)
