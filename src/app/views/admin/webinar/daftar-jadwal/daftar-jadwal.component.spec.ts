import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarJadwalComponent } from './daftar-jadwal.component';

describe('DaftarJadwalComponent', () => {
  let component: DaftarJadwalComponent;
  let fixture: ComponentFixture<DaftarJadwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarJadwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
