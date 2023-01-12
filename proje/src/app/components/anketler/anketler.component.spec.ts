/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnketlerComponent } from './anketler.component';

describe('AnketlerComponent', () => {
  let component: AnketlerComponent;
  let fixture: ComponentFixture<AnketlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
