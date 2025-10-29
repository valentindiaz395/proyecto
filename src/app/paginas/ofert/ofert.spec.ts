import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ofert } from './ofert';

describe('Ofert', () => {
  let component: Ofert;
  let fixture: ComponentFixture<Ofert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ofert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ofert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
