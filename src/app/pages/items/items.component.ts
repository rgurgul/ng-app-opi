import { Component, inject } from '@angular/core';
import { SearchComponent } from "../../shared/components/search/search.component";
import { GridComponent } from "../../shared/components/grid/grid.component";
import { ItemsService } from '../../shared/services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [SearchComponent, GridComponent,CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  itemsService = inject(ItemsService);
  res$ = this.itemsService.fetch();
}
