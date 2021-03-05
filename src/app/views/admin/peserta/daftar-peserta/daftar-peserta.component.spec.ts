import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPesertaComponent } from './daftar-peserta.component';

describe('DaftarPesertaComponent', () => {
  let component: DaftarPesertaComponent;
  let fixture: ComponentFixture<DaftarPesertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPesertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
