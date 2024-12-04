import { Injectable, signal } from '@angular/core';
import { getCharacter } from '../actions/getCharacter';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterId = signal<string| null>(null);
  private quieryClient=  injectQueryClient();


  setCharacterId(characterId: string){
    this.characterId.set(characterId);
  }


  charactersQuery = injectQuery(()=>({
    queryKey: ['characters', this.characterId()]  ,
    queryFn: () => getCharacter( this.characterId()!),
    enabled: !!this.characterId()
 }))

 prefetchCharacter(characterId: string){

  this.quieryClient.prefetchQuery({
    queryKey: ['characters', characterId],
    queryFn: () => getCharacter(characterId),
    staleTime: 1000 * 60 * 5 
  })

 }

}
 





