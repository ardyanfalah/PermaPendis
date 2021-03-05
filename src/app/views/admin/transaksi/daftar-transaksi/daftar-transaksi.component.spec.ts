import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarTransaksiComponent } from './daftar-transaksi.component';

describe('DaftarTransaksiComponent', () => {
  let component: DaftarTransaksiComponent;
  let fixture: ComponentFixture<DaftarTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
