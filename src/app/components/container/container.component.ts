import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Character from 'src/app/models/Character';
import { ObtainHeroesService } from 'src/app/services/obtain-heroes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private _obtainHero: ObtainHeroesService) {}
  /* Elementos esenciales para la paginación */
  limit = 10;
  offset = 0;

  characters?: Observable<Character[]>;

  ngOnInit(): void {
    this.characters = this._obtainHero.characters;
    this.obtainCharacters();
  }

  obtainCharacters() {
    const param = `ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.Hash}&limit=6&offset=0`;
    this._obtainHero.obtainCharacters(param);
  }
}
