import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterGroupComponent } from '../counter-group/counter-group.component';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when call onIncrease', () => {
    component.number = 2
    component.onIncrease()
    expect(component.number).toEqual(3);
  });

  it('should decrease number when call onDecrease', () => {
    component.number = 2
    component.onDecrease()
    expect(component.number).toEqual(1);
  });

  it('should reset number to 0 when call onReset', () => {
    component.number = 2;
    component.OnReset();
    expect(component.number).toBe(0);
  });


});
