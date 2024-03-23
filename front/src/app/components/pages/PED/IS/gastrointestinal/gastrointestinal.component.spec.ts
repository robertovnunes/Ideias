/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastrointestinalComponent } from './gastrointestinal.component';

describe('GastrointestinalComponent', () => {
  let component: GastrointestinalComponent;
  let fixture: ComponentFixture<GastrointestinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastrointestinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastrointestinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
