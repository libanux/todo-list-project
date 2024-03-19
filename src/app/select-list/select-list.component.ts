import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.css'
})
export class SelectListComponent {
   selectedValue?: string= 'ALL';
  options = [
    { value: 'complete', label: 'Complete' },
    { value: 'incomplete', label: 'Incomplete' }
  ];

  onSelectionChange(event: any) {
    this.selectedValue = event.target.value;
    console.log('Selected value from child:', this.selectedValue );
 
  }

}
