import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() class!: string;
  constructor() { }

  ngOnInit(): void {
  }
  get classes(): string {
    return typeof this.class === null || typeof this.class === 'undefined' ? '' : this.class;
  }

}
