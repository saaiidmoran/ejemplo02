import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusrComponent } from './addusr.component';

describe('AddusrComponent', () => {
  let component: AddusrComponent;
  let fixture: ComponentFixture<AddusrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
