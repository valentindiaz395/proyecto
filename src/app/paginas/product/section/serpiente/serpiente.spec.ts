import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reptil } from './serpiente';

describe('Reptil', () => {
  let component: Reptil;
  let fixture: ComponentFixture<Reptil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reptil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reptil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
