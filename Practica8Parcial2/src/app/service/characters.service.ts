import { Injectable } from '@angular/core';
import { getCharacters } from '../actions/getCharacters';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  charactersQuery = injectQuery(()=>({
     queryKey: ['characters'],
     queryFn: () => getCharacters()
  }))

}