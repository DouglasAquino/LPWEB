import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDisciplinasComponent } from './lista-de-disciplinas.component';

describe('ListaDeDisciplinasComponent', () => {
  let component: ListaDeDisciplinasComponent;
  let fixture: ComponentFixture<ListaDeDisciplinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeDisciplinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
