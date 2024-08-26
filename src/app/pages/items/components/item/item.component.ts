import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../../shared/services/items.service';
import { HttpResponseModel, ItemModel } from '../../../../shared/utils/types';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>item works!

    {{data$|async|json}}

  </p> `,
  styles: ``,
})
export class ItemComponent {
  route = inject(ActivatedRoute);
  itemsService = inject(ItemsService);
  data$ = this.route.params
  constructor(){
    this.data$.subscribe(({id}:any)=>{
       this.itemsService.get(id).subscribe((val:HttpResponseModel<ItemModel>)=>{
      console.log(val.data)
       })
    })
  }
}
