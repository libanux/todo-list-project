import { Component, EventEmitter, Output} from '@angular/core';
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
    { value: 'true', label: 'Complete' },
    { value: 'false', label: 'Incomplete' }
  ];

  @Output() valueSelected = new EventEmitter<string>();
  onSelectionChange(event: any) {
    this.selectedValue = event.target.value;
    this.valueSelected.emit(this.selectedValue);
    console.log('Selected value from child:', this.selectedValue );
  }

}
