import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  Character,
  CharacterDataContainer,
  CharacterDataWrapper,
} from 'src/app/models/Characters';
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {
  constructor(private http: HttpClient) {}

  charactersList!: Observable<any>;
  status!: string;
  ngOnInit(): void {
    this.charactersList = this.getCharacters() || [];
  }

  getCharacters(): Observable<Array<Character>> {
    this.status = 'characters';
    return this.http
      .get<CharacterDataWrapper>(
        'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=398d788634e8cc2decdabcfe848b82ad&hash=dbdf7c33f6f3294b0ac8da95c58278b2&limit=10&offset=0'
      )
      .pipe(
        map((todoslosdatos: CharacterDataWrapper) => {
          const dataContainer: CharacterDataContainer =
            todoslosdatos.data || {};

          dataContainer.results = dataContainer.results?.map(
            (character: Partial<Character>) => ({
              id: character.id,
              name: character.name,
              thumbnail: character.thumbnail,
              description: character.description || 'No hay descripcion',
            })
          );

          return todoslosdatos.data?.results || [];
        })
      );
  }

  getComics(id: number): Observable<any> {
    // Nos devuelve los comics donde aparece el personaje
    this.status = 'comics';
    return this.http.get<any>(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=398d788634e8cc2decdabcfe848b82ad&hash=dbdf7c33f6f3294b0ac8da95c58278b2&limit=10&offset=0`
    );
  }

  getCharactersForComic(id: number) {
    // Nos devuelve los comics donde aparece el personaje
    return this.http.get<any>(
      `https://gateway.marvel.com/v1/public/comics/${id}/characters?ts=1&apikey=398d788634e8cc2decdabcfe848b82ad&hash=dbdf7c33f6f3294b0ac8da95c58278b2&limit=10&offset=0`
    );
  }

  obtainClick(id: number) {
    if (this.status == 'characters') {
      console.log('Characters: ', this.status);
      this.charactersList = this.getComics(id);
    } else if (this.status == 'comics') {
      console.log('Comics: ', this.status);
      this.charactersList = this.getCharactersForComic(id);
    }
  }
}

/*
.pipe(
        map((res: characterDataWrapped) => {
          const dataContainer: CharacterDataContainer = res.data || {};
          dataContainer.results = dataContainer.results?.map(
            (character: heroModel) => ({
              id: character.id,
              name: character.name,
              thumbnail: character.thumbnail
            })
          );
          return dataContainer;
        }),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      );*/
