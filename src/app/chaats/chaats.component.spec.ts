import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaatsComponent } from './chaats.component';

describe('ChaatsComponent', () => {
  let component: ChaatsComponent;
  let fixture: ComponentFixture<ChaatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
