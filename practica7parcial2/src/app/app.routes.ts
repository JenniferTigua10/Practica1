import { Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/character/character.component';

export const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path:'characters/:id' , component: CharacterComponent  }
];