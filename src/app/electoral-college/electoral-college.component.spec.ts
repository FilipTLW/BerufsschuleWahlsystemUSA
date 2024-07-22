import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralCollegeComponent } from './electoral-college.component';

describe('ElectoralCollegeComponent', () => {
  let component: ElectoralCollegeComponent;
  let fixture: ComponentFixture<ElectoralCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectoralCollegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectoralCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
