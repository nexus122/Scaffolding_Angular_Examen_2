import { Component, Input, OnInit } from '@angular/core';
import Character from 'src/app/models/Character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character!: Character;
  constructor() {}

  ngOnInit(): void {}
}
