import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhousePage } from './bhouse.page';

describe('BhousePage', () => {
  let component: BhousePage;
  let fixture: ComponentFixture<BhousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhousePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
