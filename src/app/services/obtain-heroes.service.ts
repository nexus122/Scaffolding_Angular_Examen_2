import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericCallsService } from './generic-calls.service';
import { environment } from 'src/environments/environment';

// Importamos los modelos.
import CharacterDataWrapper from '../models/CharacterDataWrapper';
import CharacterDataContainer from '../models/CharacterDataContainer ';
import Character from '../models/Character';
import { map } from 'rxjs';

environment;
@Injectable({
  providedIn: 'root',
})
export class ObtainHeroesService extends GenericCallsService<CharacterDataWrapper> {
  characters: EventEmitter<Character[]> = new EventEmitter();
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getResourceUrl(): string {
    return 'characters?';
  }

  // Pipe para devolver array de Heroes
  obtainCharacters(param: string) {
    this.get(param)
      .pipe(
        map((res: CharacterDataWrapper) => {
          const dataContainer: CharacterDataContainer = res.data || {};
          dataContainer.results = dataContainer.results?.map(
            (character: Character) => ({
              id: character.id,
              name: character.name,
              thumbnail: character.thumbnail,
            })
          );
          return dataContainer;
        })
      )
      .subscribe((hero) => {
        console.log(hero);
        this.characters.emit(hero.results);
      });
  }
}
