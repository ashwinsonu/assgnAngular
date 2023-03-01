import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyComponent } from './ty.component';

describe('TyComponent', () => {
  let component: TyComponent;
  let fixture: ComponentFixture<TyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
