import { Component, Input, OnInit } from '@angular/core';
import Character from 'src/app/models/Character';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() characters!: Character[] | null;
  constructor() {}

  ngOnInit(): void {}
}
