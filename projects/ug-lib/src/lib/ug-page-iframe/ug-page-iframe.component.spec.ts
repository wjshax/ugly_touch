/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgPageIframeComponent } from './ug-page-iframe.component';

describe('UgPageIframeComponent', () => {
  let component: UgPageIframeComponent;
  let fixture: ComponentFixture<UgPageIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgPageIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgPageIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
