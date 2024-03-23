/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrescimentodesenvolvimentoComponent } from './crescimentodesenvolvimento.component';

describe('CrescimentodesenvolvimentoComponent', () => {
  let component: CrescimentodesenvolvimentoComponent;
  let fixture: ComponentFixture<CrescimentodesenvolvimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrescimentodesenvolvimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrescimentodesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
