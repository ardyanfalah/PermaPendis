import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranWebinarComponent } from './pembayaran-webinar.component';

describe('PembayaranWebinarComponent', () => {
  let component: PembayaranWebinarComponent;
  let fixture: ComponentFixture<PembayaranWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
