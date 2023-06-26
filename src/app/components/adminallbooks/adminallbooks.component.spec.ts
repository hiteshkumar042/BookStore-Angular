import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallbooksComponent } from './adminallbooks.component';

describe('AdminallbooksComponent', () => {
  let component: AdminallbooksComponent;
  let fixture: ComponentFixture<AdminallbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminallbooksComponent]
    });
    fixture = TestBed.createComponent(AdminallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
