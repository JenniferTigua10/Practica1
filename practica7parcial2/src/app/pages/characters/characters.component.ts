import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacters } from '../../interfaces/ipersonajes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  characters: ICharacters = {
    items: [],
     meta: { totalItems: 0, itemCount: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 },
    links: { first: '', previous: '', next: '', last: '' }
  }

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((data: ICharacters) => {
      this.characters = data;
      console.log(this.characters);
    }, (error) => {
      console.error(error);
    });
  }

}