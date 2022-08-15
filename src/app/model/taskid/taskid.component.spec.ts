import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskidComponent } from './taskid.component';

describe('TaskidComponent', () => {
  let component: TaskidComponent;
  let fixture: ComponentFixture<TaskidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
