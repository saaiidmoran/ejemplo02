import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarusrsComponent } from './listarusrs.component';

describe('ListarusrsComponent', () => {
  let component: ListarusrsComponent;
  let fixture: ComponentFixture<ListarusrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarusrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarusrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
