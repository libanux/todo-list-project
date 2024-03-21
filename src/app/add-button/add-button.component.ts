import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewNoteComponent } from '../new-note/new-note.component';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {

  constructor(private modalService: NgbModal) {} 

  openPopup() {
    const modalRef = this.modalService.open(NewNoteComponent, {
      size: 'md' 
    });
    modalRef.componentInstance.noteAdded.subscribe((result: any) => {
      console.log('Output of the popup:', result);
      this.NewNote.emit(result);
    });
  }

  @Output() NewNote = new EventEmitter<any>();
}
