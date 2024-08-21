import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  input,
  output,
  Signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, filter, first, take } from 'rxjs';

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
  destroyRef = inject(DestroyRef);
  ngAfterViewInit(): void {
    this.form()
      ?.valueChanges?.pipe(
        takeUntilDestroyed(this.destroyRef),
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
