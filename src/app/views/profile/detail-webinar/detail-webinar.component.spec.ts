import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWebinarComponent } from './detail-webinar.component';

describe('DetailWebinarComponent', () => {
  let component: DetailWebinarComponent;
  let fixture: ComponentFixture<DetailWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
