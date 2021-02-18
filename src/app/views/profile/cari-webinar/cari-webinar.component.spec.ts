import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariWebinarComponent } from './cari-webinar.component';

describe('CariWebinarComponent', () => {
  let component: CariWebinarComponent;
  let fixture: ComponentFixture<CariWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
