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
export class TodoListComponent implements OnChanges,OnInit{
  ngOnInit(): void {
    this.filteredItems = this.items.slice(); 
  }
  //on change of addednote print it
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['addednote'] ){
    console.log("todo list " + this.addednote);
    if(this.addednote!= '')
    this.addNewNote(this.addednote);

  }
if (changes['selectedValue']) {
  if (this.selectedValue === 'ALL') {
      this.filteredItems = this.items; // Show all items
  } else if (this.selectedValue === 'true' || this.selectedValue === 'false') {
      this.filteredItems = this.items.filter(item => {
          return item.checked === (this.selectedValue === 'true');
      });
  } else {
      // Handle other cases, such as invalid input or default behavior
      console.log('Invalid selection or no selection');
      this.filteredItems = this.items; // Show all items by default
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

  addNewNote(notevalue: string){
    let itemToAdd = new Items(0, '', false);
    const itemid = this.items.length + 1;
    itemToAdd = new Items(itemid, notevalue, false);
    this.items.push(itemToAdd);
    this.filteredItems.push(itemToAdd);
    console.log(this.items);
  }
  

  filterItems() {
    this.filteredItems = this.items.slice(); // Make a copy of the original items
    this.filteredItems = this.items.filter(item => {
      return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
  


  //if we click the checkbox if it is true it will be switched into false and vise versa
  checkboxChange(id:number){
    const foundItem = this.filteredItems.find(item => item.id === id);
    console.log(foundItem);
    if(foundItem?.checked == true){
      foundItem.checked=false;
    }
    else if (foundItem?.checked == false){
      foundItem.checked=true;
    }
    console.log(foundItem);
  }

  onCheckboxChange(event: any) {
    this.checkedChange.emit(event.target.checked); // Emit the checkbox state to the parent
    console.log(this.checkedChange);  }

  DeleteItem(id:number){
    const index = this.items.findIndex(item => item.id === id);
    console.log(index);
    if (index !== -1) {
      this.items.splice(index, 1);
  } else {
      console.log("Item not found");
  }
  }

  DeletefilteredItem(id:number){
    const index = this.filteredItems.findIndex(item => item.id === id);
    console.log(index);
    if (index !== -1) {
      this.filteredItems.splice(index, 1);
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

  

  

}
