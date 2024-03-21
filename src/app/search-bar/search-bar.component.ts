import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    this.searchEvent.emit(this.searchQuery);
  }

}
