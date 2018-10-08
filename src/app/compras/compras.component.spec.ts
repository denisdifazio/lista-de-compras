import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ComprasComponent } from "./compras.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("ComprasComponent", () => {
  let component: ComprasComponent;
  let fixture: ComponentFixture<ComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
