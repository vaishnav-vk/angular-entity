import { Routes } from '@angular/router';
import { Products } from './products/products/products';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
    {
        path:'products/:id',
        component:ProductDetail
    },
    {
        path:'products',
        component:Products
    },
    {
        path:'',
        redirectTo:'products',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'products'
    }
];
