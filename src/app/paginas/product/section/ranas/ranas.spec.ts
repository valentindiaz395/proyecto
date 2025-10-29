import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranas } from './ranas';

describe('Ranas', () => {
  let component: Ranas;
  let fixture: ComponentFixture<Ranas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ranas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ranas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
