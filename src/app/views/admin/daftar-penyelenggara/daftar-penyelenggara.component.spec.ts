import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPenyelenggaraComponent } from './daftar-penyelenggara.component';

describe('DaftarPenyelenggaraComponent', () => {
  let component: DaftarPenyelenggaraComponent;
  let fixture: ComponentFixture<DaftarPenyelenggaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPenyelenggaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPenyelenggaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
