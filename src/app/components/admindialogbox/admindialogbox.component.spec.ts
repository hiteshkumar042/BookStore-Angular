import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindialogboxComponent } from './admindialogbox.component';

describe('AdmindialogboxComponent', () => {
  let component: AdmindialogboxComponent;
  let fixture: ComponentFixture<AdmindialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindialogboxComponent]
    });
    fixture = TestBed.createComponent(AdmindialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
