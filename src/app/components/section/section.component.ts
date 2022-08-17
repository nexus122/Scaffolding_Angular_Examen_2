import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Character from 'src/app/models/Character';
import CharacterDataContainer from 'src/app/models/CharacterDataContainer ';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() characters!: CharacterDataContainer | null;
  @Input() type!: number;
  @Output() pagination = new EventEmitter<any>();

  actualCharacters: Character[] = this.characters?.results || [];
  limit = 10;
  offset = 0;
  total!: number;

  constructor() {}

  ngOnInit(): void {}

  obtainNewPage(page: any) {
    this.offset = page.pageIndex * page.pageSize;
    let obj = {
      limit: this.limit,
      offset: this.offset,
      total: this.total,
      type: this.type,
    };
    this.pagination.emit(obj); // Emitimos el evento para que el padre lo recoja y haga peticiónes.
  }

  ngOnChanges() {
    this.total = this.characters?.total || this.total;
    this.actualCharacters = this.characters?.results || [];
  }
}
