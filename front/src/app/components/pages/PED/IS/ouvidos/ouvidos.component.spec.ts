import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvidosComponent } from './ouvidos.component';

describe('OuvidosComponent', () => {
  let component: OuvidosComponent;
  let fixture: ComponentFixture<OuvidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuvidosComponent]
    });
    fixture = TestBed.createComponent(OuvidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
