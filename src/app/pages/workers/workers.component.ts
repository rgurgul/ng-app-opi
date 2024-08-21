import { Component, inject } from '@angular/core';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { WorkersService } from '../../shared/services/workers.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss',
})
export class WorkersComponent {
  fitlers$ = new BehaviorSubject({})
  
  updateFilters($event: any) {
    this.fitlers$.next($event);
  }
  wService = inject(WorkersService);
  data: any;

  constructor() {
    /* this.wService.fetch().subscribe((resp) => {
      this.data = resp.data;
    }); */
  }
}
