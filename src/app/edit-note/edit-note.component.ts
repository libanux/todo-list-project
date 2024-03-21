import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent {

  closePopup() {
    console.log('Popup closed');
  }
  
  @Output() noteAdded = new EventEmitter<string>();
  note: string = ''; 

  editNote() {
   
  }

}
