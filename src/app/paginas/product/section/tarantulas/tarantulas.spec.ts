import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarantulas } from './tarantulas';

describe('Tarantulas', () => {
  let component: Tarantulas;
  let fixture: ComponentFixture<Tarantulas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarantulas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarantulas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
