import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let df: DebugElement;
  let e: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });
  }));

  it("should have as text home page ", async(() => {
    expect(component.text).toEqual("home page");
  }));

  it("backend button onclick button", () => {
    spyOn(component, "backendbuttononclick");
    component.backendbuttononclick();
    expect(component.backendbuttononclick).toHaveBeenCalled();
  });
  it("frontend button onclick button", () => {
    spyOn(component, "frontendbuttononclick");
    component.frontendbuttononclick();
    expect(component.frontendbuttononclick).toHaveBeenCalled();
  });

  it("test button onclick button", () => {
    spyOn(component, "testbuttononclick");
    component.testbuttononclick();
    expect(component.testbuttononclick).toHaveBeenCalled();
  });
  it("all button onclick button", () => {
    spyOn(component, "allbuttononclick");
    component.allbuttononclick();
    expect(component.allbuttononclick).toHaveBeenCalled();
  });
});