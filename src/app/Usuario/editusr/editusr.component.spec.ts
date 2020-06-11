import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusrComponent } from './editusr.component';

describe('EditusrComponent', () => {
  let component: EditusrComponent;
  let fixture: ComponentFixture<EditusrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditusrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
