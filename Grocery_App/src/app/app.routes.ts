import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'add-grocery-item',
    loadComponent: () => import('./add-grocery-item/add-grocery-item.page').then( m => m.AddGroceryItemPage)
  },
];
