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
  @Output() noteAdded = new EventEmitter<string>();
  note: string = ''; 

  addNote() {
    if (this.note.trim() !== '') {
      this.noteAdded.emit(this.note.trim());
      console.log('Value of note:', this.note.trim());
      this.note = '';
    }
  }
}
