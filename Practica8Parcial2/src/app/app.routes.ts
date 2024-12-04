import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'characters', loadComponent: () => import('./pages/characters/characters.component')
    },
    {
      path: 'character/:id', loadComponent: () => import('./pages/character/character.component')
    },
    {
      path:'**', redirectTo: 'characters'
    }
  
];