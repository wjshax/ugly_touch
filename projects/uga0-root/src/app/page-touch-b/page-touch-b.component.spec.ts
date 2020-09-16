/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTouchBComponent } from './page-touch-b.component';

describe('PageTouchBComponent', () => {
  let component: PageTouchBComponent;
  let fixture: ComponentFixture<PageTouchBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTouchBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTouchBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
