import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import CharacterDataContainer from 'src/app/models/CharacterDataContainer ';
import { ObtainHeroesService } from 'src/app/services/obtain-heroes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  /* Elementos esenciales para la paginación */
  characters!: Observable<CharacterDataContainer>;
  creators!: Observable<CharacterDataContainer>;

  constructor(private _obtainHero: ObtainHeroesService) {}

  ngOnInit(): void {
    this.apiCharacterCall(0, 10);
    this.apiCreatorCall(0, 10);
  }

  obtainPagination(params: any) {
    if (params.type == 1) this.apiCharacterCall(params.offset, params.limit);
    if (params.type == 2) this.apiCreatorCall(params.offset, params.limit);
  }

  apiCharacterCall(offset: number, limit: number) {
    const param = `ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.Hash}&limit=${limit}&offset=${offset}`;
    this.characters = this._obtainHero.obtainCharacters(param);
  }
  apiCreatorCall(offset: number, limit: number) {
    const param = `ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.Hash}&limit=${limit}&offset=${offset}`;
    this.creators = this._obtainHero.obtainCreators(param);
  }
}
