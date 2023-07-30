import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectsComponent } from './page-projects.component';

describe('PageProjectsComponent', () => {
  let component: PageProjectsComponent;
  let fixture: ComponentFixture<PageProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProjectsComponent]
    });
    fixture = TestBed.createComponent(PageProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
