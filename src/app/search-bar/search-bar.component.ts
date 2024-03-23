import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchQuery: string = '';
  
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}
  onInputChange(): void {
    this.searchEvent.emit(this.searchQuery);
  }
}
