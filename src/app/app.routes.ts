import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
            loadComponent: () => import('./main/pages/wedding-page/wedding-page.component').then(m => m.WeddingPageComponent), 
      },
      // otras rutas hijas
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
