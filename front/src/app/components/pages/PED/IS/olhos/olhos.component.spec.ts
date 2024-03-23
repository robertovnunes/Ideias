import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlhosComponent } from './olhos.component';

describe('OlhosComponent', () => {
  let component: OlhosComponent;
  let fixture: ComponentFixture<OlhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlhosComponent]
    });
    fixture = TestBed.createComponent(OlhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
