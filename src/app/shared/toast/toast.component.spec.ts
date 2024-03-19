import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastsComponent]
    });
    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
