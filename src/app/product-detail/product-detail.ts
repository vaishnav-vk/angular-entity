import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import { selectRouteParams } from '../route.selectors';
import { selectProductEntities } from '../products/products.selectors';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './product-detail.html'
})
export class ProductDetail {
  private store = inject(Store);

  product$ = combineLatest([
    this.store.select(selectRouteParams),
    this.store.select(selectProductEntities)
  ]).pipe(
    map(([params, entities]) => {
      const id = Number(params['id']);
      return entities[id] ?? null;
    })
  );
}