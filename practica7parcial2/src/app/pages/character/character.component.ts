import { Component, Input } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../../interfaces/icharacter';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {


  @Input() id:string ='';

  character: ICharacter= {
    id:0,
    name:'',
    ki:'',
    maxKi:'',
    race:'',
    gender:'',
    description:'',
    image:'',
    affiliation:'',
    deletedAt:null,
    originPlanet:{
      id:0,
      name:'',
      isDestroyed:false,
      description:'',
      image:'',
      deletedAt:null
    },
    transformations:[{
      id:0,
      name:'',
      image:'',
      ki:'',
      deletedAt:null
    }]
  }

  constructor(
    private service: CharactersService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id') || '';
      this.service.getCharacter(this.id).subscribe((data: ICharacter) => {
        this.character = data;
        console.log(this.character);
      })
    })

  }


}