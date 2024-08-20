import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  onClick(type:string, id:string) {
    this.action.emit({type, id});
  }

  data = input<any[]>();
  config = input<any[]>();
  action = output<any>();
}
