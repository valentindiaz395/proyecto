import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lagarto } from './lagarto';

describe('Lagarto', () => {
  let component: Lagarto;
  let fixture: ComponentFixture<Lagarto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lagarto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lagarto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
