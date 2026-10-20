import { ApplicationConfig, provideBrowserGlobalErrorListeners,isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { productReducer } from './products/products.reducer';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState('products', productReducer),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge:25,
      logOnly:!isDevMode()
    })
  ],
};
