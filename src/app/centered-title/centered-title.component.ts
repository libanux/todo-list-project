import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-title',
  standalone: true,
  imports: [],
  templateUrl: './centered-title.component.html',
  styleUrl: './centered-title.component.css'
})
export class CenteredTitleComponent {
  // The @Input() decorator marks the 'title' property as an input property in an Angular component.
// This means that the component can receive a value for the 'title' property from its parent component.
// The '?' indicates that the 'title' property is optional, meaning it may or may not receive a value.
// If a value is provided by the parent component, it will be of type string.
// Example usage in parent component template: <child-component [title]="'Hello'"></child-component>
  @Input() title?: string;

}
