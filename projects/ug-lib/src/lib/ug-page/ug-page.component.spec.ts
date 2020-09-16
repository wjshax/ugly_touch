/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgPageComponent } from './ug-page.component';

describe('UgPageComponent', () => {
  let component: UgPageComponent;
  let fixture: ComponentFixture<UgPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
