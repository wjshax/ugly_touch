/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTouchGComponent } from './page-touch-g.component';

describe('PageTouchGComponent', () => {
  let component: PageTouchGComponent;
  let fixture: ComponentFixture<PageTouchGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTouchGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTouchGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
