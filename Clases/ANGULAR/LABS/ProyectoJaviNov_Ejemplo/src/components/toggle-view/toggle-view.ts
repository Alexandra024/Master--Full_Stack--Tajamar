import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-toggle-view',
  styleUrl: './toggle-view.css',
  templateUrl: './toggle-view.html',
})
export class ToggleViewComponent {

  showContent:boolean = true;

}
