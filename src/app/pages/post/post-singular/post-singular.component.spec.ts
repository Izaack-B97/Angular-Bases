import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingularComponent } from './post-singular.component';

describe('PostSingularComponent', () => {
  let component: PostSingularComponent;
  let fixture: ComponentFixture<PostSingularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSingularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
