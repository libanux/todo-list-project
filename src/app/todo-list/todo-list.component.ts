import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  items = [
    { id: 1, name: 'Item 1', checked: false },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: false }
  ];

  onCheckboxChange(item: any) {
    item.checked = !item.checked;
  }

}
