/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgRotationComponent } from './ug-rotation.component';

describe('UgRotationComponent', () => {
  let component: UgRotationComponent;
  let fixture: ComponentFixture<UgRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
