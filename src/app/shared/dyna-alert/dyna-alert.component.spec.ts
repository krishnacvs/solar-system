import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaAlertComponent } from './dyna-alert.component';

describe('DynaAlertComponent', () => {
  let component: DynaAlertComponent;
  let fixture: ComponentFixture<DynaAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynaAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
