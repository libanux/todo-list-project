import { Items } from './../classes/Itemclass';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


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
   
  }

  @Input() addednote: string= '';
  private itemToAdd = new Items(0, '', false);

  addNewNote(notevalue: string){
    const itemid = this.items.length + 1;
    // const selectedtype = 
    this.itemToAdd = new Items(itemid, notevalue, false);
        this.items.push(this.itemToAdd);
        console.log(this.items);
    


  }
  


  items:Items[]=[];

  // onCheckboxChange(item: any) {
  //   item.checked = !item.checked;
  // }

}
