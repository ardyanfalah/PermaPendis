import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarInstrukturComponent } from './daftar-instruktur.component';

describe('DaftarInstrukturComponent', () => {
  let component: DaftarInstrukturComponent;
  let fixture: ComponentFixture<DaftarInstrukturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarInstrukturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarInstrukturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
