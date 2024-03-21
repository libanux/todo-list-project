import { Component, Output, EventEmitter, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css'
})
export class NewNoteComponent {
  
  closePopup() {
    console.log('Popup closed');
  }
  
  @Output() noteAdded = new EventEmitter<string>();
  note: string = ''; 

  addNote() {
    if (this.note.trim() !== '') {
      this.noteAdded.emit(this.note.trim());
      console.log('Value of note:', this.note.trim());
      this.note = '';
      this.closePopup();
    }
  }



}