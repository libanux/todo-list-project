import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css'
})
export class NewNoteComponent {
  
  closePopup() {
    console.log('Popup closed');
  }
  

  note: string = ''; 
  @Output() noteAdded = new EventEmitter<string>();

  addNote() {
    if (this.note.trim() !== '') {
      this.noteAdded.emit(this.note.trim());
      this.note = '';
    }
  }

}