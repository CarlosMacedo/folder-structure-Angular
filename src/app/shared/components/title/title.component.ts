import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  private _title: string = '';

  @Input() set title(title: string) {
    this._title = title.toUpperCase();
  }

  get title(): string {
    return this._title;
  }

  constructor() {}

  ngOnInit(): void {}

  change(): void {
    let u: string = this._title.toUpperCase();
    let l: string = this._title.toLowerCase();

    u === this._title ? (this._title = l) : (this._title = u);
  }
}
