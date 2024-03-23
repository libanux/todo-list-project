import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CenteredTitleComponent } from './centered-title/centered-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectListComponent } from './select-list/select-list.component';
import { LightDarkModeComponent } from './light-dark-mode/light-dark-mode.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { NewNoteComponent } from './new-note/new-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CenteredTitleComponent, SearchBarComponent, SelectListComponent, LightDarkModeComponent,TodoListComponent,AddButtonComponent,NewNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'TodoListProject';


  //Stores the search query received 
  searchQuery: string = '';
  // Method to receive search query from child component
  receiveSearchQuery(query: string) {
    this.searchQuery = query;
    console.log('Received search query in parent:', this.searchQuery);
}

  //type of selected value
  typeSelectedValue: string = 'ALL';
  receiveSelectedValue(value: string) {
    this.typeSelectedValue = value;
    console.log('Received value in parent:', this.typeSelectedValue);
  }


  //Light or dark mode
  LightMode?: string;
  receiveModeFromChild(mode: string) {
    this.LightMode = mode;
    console.log('Received mode in parent:', this.LightMode);
  }

  //recevied added note from add button
  receivedNote: string = '';
  receiveNoteFromChild(note: string) {
    this.receivedNote = note;
    console.log('Received note in parent:', this.receivedNote);
  }

}
