/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenitourinarioComponent } from './genitourinario.component';

describe('GenitourinarioComponent', () => {
  let component: GenitourinarioComponent;
  let fixture: ComponentFixture<GenitourinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenitourinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenitourinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
