import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewNoteComponent } from '../new-note/new-note.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
   // @Output decorator marks the property noteAdded as an output property, allowing it to emit events to its parent component.
  // It creates an instance of EventEmitter, which is used to emit events with a value of type string.
  @Output() noteAdded = new EventEmitter<string>();

  // The note property stores the string value of the note entered by the user.
  note: string = ''; 

  // The addNote method is called when the user clicks on the add button to add a note.
  addNote() {
    if (this.note.trim() !== '') {
      // Emits an event with the trimmed note value using the noteAdded EventEmitter.
      this.noteAdded.emit(this.note.trim());
      console.log('Value of note:', this.note.trim());
      // Resets the note property to an empty string after emitting the event.
      this.note = '';
    }
  }
}
