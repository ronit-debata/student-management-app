import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAttendanceComponent } from './see-attendance.component';

describe('SeeAttendanceComponent', () => {
  let component: SeeAttendanceComponent;
  let fixture: ComponentFixture<SeeAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
