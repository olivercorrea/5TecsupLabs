import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImagenesComponent } from './lista-imagenes.component';

describe('ListaImagenesComponent', () => {
  let component: ListaImagenesComponent;
  let fixture: ComponentFixture<ListaImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaImagenesComponent]
    });
    fixture = TestBed.createComponent(ListaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
