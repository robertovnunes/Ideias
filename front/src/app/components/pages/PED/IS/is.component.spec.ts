import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISComponent } from './is.component';

describe('ISComponent', () => {
  let component: ISComponent;
  let fixture: ComponentFixture<ISComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ISComponent]
    });
    fixture = TestBed.createComponent(ISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
