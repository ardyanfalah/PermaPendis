import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAdminComponent } from './daftar-admin.component';

describe('DaftarAdminComponent', () => {
  let component: DaftarAdminComponent;
  let fixture: ComponentFixture<DaftarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
