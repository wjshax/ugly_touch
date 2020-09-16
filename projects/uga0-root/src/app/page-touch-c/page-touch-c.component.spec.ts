/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTouchCComponent } from './page-touch-c.component';

describe('PageTouchCComponent', () => {
  let component: PageTouchCComponent;
  let fixture: ComponentFixture<PageTouchCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTouchCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTouchCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
