import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterDataWrapper } from 'src/app/models/Characters';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  @Input() charactersList!: Observable<any>;
  @Output() idSearch: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  obtainClick(id: number) {
    this.idSearch.emit(id);
  }

  ngOnInit(): void {}
}
