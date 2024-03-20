import { Component } from '@angular/core';
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
    this.modalService.open(NewNoteComponent, {
      size: 'md' 
    });
  }

}
