import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tortugas } from './tortugas';

describe('Tortugas', () => {
  let component: Tortugas;
  let fixture: ComponentFixture<Tortugas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tortugas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tortugas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
