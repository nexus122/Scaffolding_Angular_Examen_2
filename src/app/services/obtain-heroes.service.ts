import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericCallsService } from './generic-calls.service';
import { environment } from 'src/environments/environment';

// Importamos los modelos.
import CharacterDataWrapper from '../models/CharacterDataWrapper';
import CharacterDataContainer from '../models/CharacterDataContainer ';
import Character from '../models/Character';
import { map, Observable } from 'rxjs';

environment;
@Injectable({
  providedIn: 'root',
})
export class ObtainHeroesService extends GenericCallsService<CharacterDataWrapper> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  // Pipe para devolver array de Heroes
  obtainCharacters(param: string): Observable<CharacterDataContainer> {
    return this.get('characters?', param).pipe(
      map((res: CharacterDataWrapper) => {
        const dataContainer: CharacterDataContainer = res.data || {};
        dataContainer.results = dataContainer.results?.map(
          (character: any) => ({
            id: character.id,
            name: character.name,
            thumbnail: character.thumbnail,
          })
        );
        return dataContainer;
      })
    );
  }

  obtainCreators(param: string): Observable<CharacterDataContainer> {
    return this.get('creators?', param).pipe(
      map((res: any) => {
        const dataContainer: CharacterDataContainer = res.data || {};
        dataContainer.results = dataContainer.results?.map((creator: any) => ({
          id: creator.id,
          name: creator.fullName,
          thumbnail: creator.thumbnail,
        }));
        return dataContainer;
      })
    );
  }
}
