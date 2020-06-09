import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventComponent } from './add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DpDatePickerModule } from 'ng2-date-picker';
describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, DpDatePickerModule ],
      providers: [provideMockStore({})],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title "Add event"', () => {
    const fixture = TestBed.createComponent(AddEventComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Add event');
  });
});
