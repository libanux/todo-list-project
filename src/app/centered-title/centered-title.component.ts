import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-title',
  standalone: true,
  imports: [],
  templateUrl: './centered-title.component.html',
  styleUrl: './centered-title.component.css'
})
export class CenteredTitleComponent {
  @Input() title?: string;

}
