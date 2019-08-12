import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaNovaPage } from './venda-nova.page';

describe('VendaNovaPage', () => {
  let component: VendaNovaPage;
  let fixture: ComponentFixture<VendaNovaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaNovaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaNovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
