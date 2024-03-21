import { Items } from './../classes/Itemclass';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewNoteComponent } from '../new-note/new-note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnChanges{
  //on change of addednote print it
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['addednote']){
    console.log("todo list " + this.addednote);
    if(this.addednote!= '')
    this.addNewNote(this.addednote);
  }

  }

  @Input() addednote: string= '';
  @Output() checkedChange = new EventEmitter<boolean>();

  //if we change the checkbox if it is true it will be switched into false and vise versa
  checkboxChange(id:number){
    const foundItem = this.items.find(item => item.id === id);
    console.log(foundItem);
    if(foundItem?.checked == true){
      foundItem.checked=false;
    }
    else if (foundItem?.checked == false){
      foundItem.checked=true;
    }
    console.log(foundItem);
  }
  DeleteItem(id:number){
    // Find the index of the item with the specified ID
    const index = this.items.findIndex(item => item.id === id);
    // Check if the item exists
    if (index !== -1) {
      // Method 1: Using splice() to remove the item from the array
      this.items.splice(index, 1);
  
      // Method 2: Using filter() to create a new array without the item
      // this.items = this.items.filter(item => item.id !== id);
  } else {
      console.log("Item not found");
  }

  }

  addNewNote(notevalue: string){
    let itemToAdd = new Items(0, '', false);
    const itemid = this.items.length + 1;
    itemToAdd = new Items(itemid, notevalue, false);
        this.items.push(itemToAdd);
        console.log(this.items);
  }
  


  items:Items[]=[];

  onCheckboxChange(event: any) {
    this.checkedChange.emit(event.target.checked); // Emit the checkbox state to the parent
    console.log(this.checkedChange);  }




    constructor(private modalService: NgbModal) {} 

    openPopup() {
      const modalRef = this.modalService.open(EditNoteComponent, {
        size: 'md' 
      });
      modalRef.componentInstance.noteAdded.subscribe((result: any) => {
        console.log('Output of the popup:', result);
        // this.NewNote.emit(result);
      });
    }
  

}
