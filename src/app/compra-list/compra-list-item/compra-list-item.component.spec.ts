import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraListItemComponent } from './compra-list-item.component';

describe('CompraListItemComponent', () => {
  let component: CompraListItemComponent;
  let fixture: ComponentFixture<CompraListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
