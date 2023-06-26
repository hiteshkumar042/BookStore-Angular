import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisplaybookComponent } from './admindisplaybook.component';

describe('AdmindisplaybookComponent', () => {
  let component: AdmindisplaybookComponent;
  let fixture: ComponentFixture<AdmindisplaybookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindisplaybookComponent]
    });
    fixture = TestBed.createComponent(AdmindisplaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
