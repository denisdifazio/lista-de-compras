import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: `host-component`,
  template: `<app-footer></app-footer>`
})
class TestHostComponent {
  @ViewChild(FooterComponent)
  public componentUnderTestComponent: FooterComponent;
}

describe("FooterComponent", () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, TestHostComponent]
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
