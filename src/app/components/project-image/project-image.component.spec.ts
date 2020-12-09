import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImageComponent } from './project-image.component';

describe('ProjectImageComponent', () => {
  let component: ProjectImageComponent;
  let fixture: ComponentFixture<ProjectImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
