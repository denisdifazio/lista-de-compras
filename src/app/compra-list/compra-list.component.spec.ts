import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CompraListComponent } from "./compra-list.component";
import { CompraListItemComponent } from "./compra-list-item/compra-list-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

describe("CompraListComponent", () => {
  let component: CompraListComponent;
  let fixture: ComponentFixture<CompraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule],
      declarations: [CompraListComponent, CompraListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraListComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
