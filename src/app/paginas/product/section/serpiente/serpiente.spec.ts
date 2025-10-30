import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serpiente } from './serpiente';

describe('Serpiente', () => {
  let component: Serpiente;
  let fixture: ComponentFixture<Serpiente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serpiente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serpiente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
