import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camaleones } from './camaleones';

describe('Camaleones', () => {
  let component: Camaleones;
  let fixture: ComponentFixture<Camaleones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camaleones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Camaleones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
