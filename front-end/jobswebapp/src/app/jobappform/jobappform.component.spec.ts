import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobappformComponent } from './jobappform.component';

describe('JobappformComponent', () => {
  let component: JobappformComponent;
  let fixture: ComponentFixture<JobappformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobappformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobappformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
