/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageAindexComponent } from './page-aindex.component';

describe('PageAindexComponent', () => {
  let component: PageAindexComponent;
  let fixture: ComponentFixture<PageAindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
