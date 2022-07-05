import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rx100Component } from './rx100.component';

describe('Rx100Component', () => {
  let component: Rx100Component;
  let fixture: ComponentFixture<Rx100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rx100Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rx100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
