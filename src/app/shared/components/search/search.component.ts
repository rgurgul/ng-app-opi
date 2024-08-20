import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  input,
  output,
  Signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements AfterViewInit {
  controls = input<any[]>();
  form: Signal<NgForm | undefined> = viewChild('f');
  valueChange = output<any>();
  ngAfterViewInit(): void {
    this.form()
      ?.valueChanges?.pipe(
        filter((val: any) => {
          const error = JSON.stringify(val).includes('dupa');
          if (error) {
            alert('sam jest dupa' );
            return false;
          } else {
            return true;
          }
        }),
        debounceTime(500)
      )
      .subscribe((value) => {
        this.valueChange.emit(value);
      });
  }
}
