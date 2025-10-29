import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geckos } from './geckos';

describe('Geckos', () => {
  let component: Geckos;
  let fixture: ComponentFixture<Geckos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Geckos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Geckos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
