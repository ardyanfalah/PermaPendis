import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaUserComponent } from './beranda-user.component';

describe('BerandaUserComponent', () => {
  let component: BerandaUserComponent;
  let fixture: ComponentFixture<BerandaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerandaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
