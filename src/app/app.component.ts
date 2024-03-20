import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CenteredTitleComponent } from './centered-title/centered-title.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectListComponent } from './select-list/select-list.component';
import { LightDarkModeComponent } from './light-dark-mode/light-dark-mode.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddButtonComponent } from './add-button/add-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CenteredTitleComponent, SearchBarComponent, SelectListComponent, LightDarkModeComponent,TodoListComponent,AddButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'TodoListProject';
  // pageTitle: string = 'Your Page Title';
  // constructor(private modalService: NgbModal) {
  // }

  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }

  searchResults: any[] = [];
  performSearch(query: string): void {
    
    this.searchResults = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      
    ];
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
    console.log('Received mode from parent:', this.LightMode);
  }


}
