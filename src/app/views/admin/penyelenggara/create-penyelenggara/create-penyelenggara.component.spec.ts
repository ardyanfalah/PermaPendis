import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePenyelenggaraComponent } from './create-penyelenggara.component';

describe('CreatePenyelenggaraComponent', () => {
  let component: CreatePenyelenggaraComponent;
  let fixture: ComponentFixture<CreatePenyelenggaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePenyelenggaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePenyelenggaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
