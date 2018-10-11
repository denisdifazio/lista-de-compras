import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompraListItemComponent } from "./compra-list-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: `host-component`,
  template: `<app-compra-list-item></app-compra-list-item>`
})
class TestHostComponent {
  @ViewChild(CompraListItemComponent)
  public componentUnderTestComponent: CompraListItemComponent;
}

describe("CompraListItemComponent", () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FontAwesomeModule],
      declarations: [CompraListItemComponent, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
