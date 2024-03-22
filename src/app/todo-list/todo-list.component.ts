import { Items } from './../classes/Itemclass';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewNoteComponent } from '../new-note/new-note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnChanges{
  //on change of addednote print it
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['addednote'] ){
    console.log("todo list " + this.addednote);
    if(this.addednote!= '')
    this.addNewNote(this.addednote);

  }

  if (changes['selectedValue']) {
    if (this.selectedValue !== '') {
        this.filteredItems = this.items.filter(item => {
            return this.selectedValue === 'true' ? item.checked === true : item.checked === false;
        });
        this.items = this.filteredItems;
    } else {
        // If selectedValue is empty, show all items
        this.filteredItems = this.items;
    }
}


  if (changes['searchQuery']) {
     this.filterItems(); 
   }

}

  @Input() searchQuery: string = '';
  @Input() addednote: string= '';
  @Input() selectedValue: string= '';
  @Output() checkedChange = new EventEmitter<boolean>();

  items:Items[]=[];
  filteredItems: Items[] = [];

  

  filterItems() {
    this.filteredItems = this.items.filter(item => {
      return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }


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
    console.log(index);
    // Check if the item exists
    if (index !== -1) {
      this.items.splice(index, 1);
  } else {
      console.log("Item not found");
  }
  }


  EditItem(id: number, newValue: string) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index].name = newValue;
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
  
  

  onCheckboxChange(event: any) {
    this.checkedChange.emit(event.target.checked); // Emit the checkbox state to the parent
    console.log(this.checkedChange);  }

  

    



}
