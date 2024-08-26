import { Component, inject, TemplateRef } from '@angular/core';
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
import { FormsModule, NgForm } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    SearchComponent,
    GridComponent,
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  router = inject(Router);
  actionHandler({ type, id }: any) {
    switch (type) {
      case 'remove':
        this.itemsService.remove(id).subscribe(() => this.fetchItems());
        break;
      case 'add':
        this.itemsService.add(id).subscribe(() => this.fetchItems());
        break;
      case 'more':
        this.router.navigate(['items', id])
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
  dialog = inject(MatDialog);
  res$!: Observable<any>;
  config: DataGridRowConfig<ItemKeys>[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { type: FieldTypes.BUTTON, header: 'remove' },
    { type: FieldTypes.BUTTON, header: 'more' },
  ];

  constructor() {
    this.filters$.subscribe((val) => {
      this.fetchItems();
    });
  }

  openModal(tpl: TemplateRef<any>) {
    const modalRef = this.dialog.open(tpl);
    modalRef.afterClosed().subscribe((form: NgForm) => {
      if (form.valid) {
        this.actionHandler({ type: 'add', id: form.value });
      } else {
        alert('form invalid');
      }
    });
  }

  private fetchItems() {
    this.res$ = this.itemsService.fetch(this.filters$.value);
  }

  updateFilters(value: any) {
    this.filters$.next({ ...this.filters$.value, ...value });
  }
}
