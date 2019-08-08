import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaListPage } from './venda-list.page';

describe('VendaListPage', () => {
  let component: VendaListPage;
  let fixture: ComponentFixture<VendaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
