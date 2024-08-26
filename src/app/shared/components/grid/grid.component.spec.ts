import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { By } from '@angular/platform-browser';

fdescribe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const componentRef = fixture.componentRef;
    componentRef.setInput('data', [{title:'tomato'},{title:'apple'}])
    componentRef.setInput('config', [{key:'title'}])
    fixture.detectChanges();
    const rows = fixture.debugElement.query(By.css('tbody')).queryAll(By.css('tr'))
    console.log(rows.length)
    expect(rows.length).toBe(2)
  });

  it('should create', () => {
    const componentRef = fixture.componentRef;
    componentRef.setInput('data', [{title:'tomato'}])
    componentRef.setInput('config', [{key:'title'}])
    fixture.detectChanges();
    const rows = fixture.debugElement.query(By.css('tbody')).queryAll(By.css('tr'))
    console.log(rows[0].nativeElement.innerText)
    expect(rows.length).toBe(1)
    expect(rows[0].nativeElement.innerText).toContain('tomato')
  });
});
