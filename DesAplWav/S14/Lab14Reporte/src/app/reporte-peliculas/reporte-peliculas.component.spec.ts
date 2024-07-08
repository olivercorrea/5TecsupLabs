import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePeliculasComponent } from './reporte-peliculas.component';

describe('ReportePeliculasComponent', () => {
  let component: ReportePeliculasComponent;
  let fixture: ComponentFixture<ReportePeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportePeliculasComponent]
    });
    fixture = TestBed.createComponent(ReportePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
