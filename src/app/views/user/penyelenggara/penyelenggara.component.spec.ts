import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyelenggaraComponent } from './penyelenggara.component';

describe('PenyelenggaraComponent', () => {
  let component: PenyelenggaraComponent;
  let fixture: ComponentFixture<PenyelenggaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenyelenggaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyelenggaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
