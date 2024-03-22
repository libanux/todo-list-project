import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Items } from '../classes/Itemclass';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent {
  itemName?: string; 

  // Constructor
  constructor() {
    // Initialize itemName if needed
    this.itemName = ''; // You can assign any default value here if necessary
  }

  // Method to access the value of itemName
  accessItemNameValue() {
    console.log('Value of itemName:', this.itemName);
  }

  

}
