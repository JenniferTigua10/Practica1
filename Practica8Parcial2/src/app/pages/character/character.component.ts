import { Component, inject } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [ RouterLink  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export default class CharacterComponent {
  route = inject(ActivatedRoute);
  characterService= inject(CharacterService);

  characterId = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('id') ?? '' ),
      tap((id) => this.characterService.setCharacterId(id)  )
    )
  );

    characterQuery  = this.characterService.charactersQuery;





}