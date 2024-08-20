import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { ItemsService } from '../../shared/services/items.service';
import { CommonModule } from '@angular/common';
import {
  DataGridRowConfig,
  FieldTypes,
  ItemKeys,
  ItemsFiltersModel,
} from '../../shared/utils/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [SearchComponent, GridComponent, CommonModule,FormsModule, MatPaginatorModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  actionHandler({ type, id }: any) {
    switch (type) {
      case 'remove':
        this.itemsService.remove(id).subscribe(()=>this.fetchItems());
        break;
      case 'more':
        alert('more');
        break;
      default:
        break;
    }
  }
  filters$: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject({
    currentPage: 1,
    itemsPerPage: 5,
  });
  itemsService = inject(ItemsService);
  res$!:Observable<any>;
  config: DataGridRowConfig<ItemKeys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: 'remove' },
    { type: FieldTypes.BUTTON, header: 'more' },
  ];


  constructor() {
    this.filters$.subscribe(val=>{
      this.fetchItems();
    });
  }

  private fetchItems() {
    this.res$ = this.itemsService.fetch(this.filters$.value);
  }

  updateFilters(value: any) {

    this.filters$.next({ ...this.filters$.value, ...value });
  }
}
