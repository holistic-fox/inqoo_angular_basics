import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inqoo-search-bar',
  templateUrl: './inqoo-search-bar.component.html',
  styleUrls: ['./inqoo-search-bar.component.scss']
})
export class InqooSearchBarComponent implements OnInit {

  @Output() onValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserTyping = (event: Event) => this.onValueChange.emit((event.target as HTMLInputElement).value);
}
