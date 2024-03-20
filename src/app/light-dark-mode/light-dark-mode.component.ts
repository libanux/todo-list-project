import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-light-dark-mode',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './light-dark-mode.component.html',
  styleUrl: './light-dark-mode.component.css'
})
export class LightDarkModeComponent {
  @Output() modeChanged = new EventEmitter<string>();
  isDarkMode: boolean = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    const mode = this.isDarkMode ? 'dark' : 'light';
    this.modeChanged.emit(mode);
    console.log('Selected value from child:', mode);

    
  }
}
