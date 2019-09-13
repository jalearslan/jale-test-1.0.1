import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { loginComponent } from "./login.component";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

describe("LoginComponent", () => {
  let comp: loginComponent;
  let fixture: ComponentFixture<loginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [loginComponent],
    
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(loginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css("form"));
        el = de.nativeElement;
      });
  }));
  it("should have as text Ulak User Login Page ", async(() => {
    expect(comp.text).toEqual("Ulak User Login Page");
  }));
  it("should set submitted to true", async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));
  it("should call the onSubmit method", async(() => {
    fixture.detectChanges();
    spyOn(comp, "onSubmit");
    el = fixture.debugElement.query(By.css("button")).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it("form should be invalid", async(() => {
    comp.contactForm.controls["Username"].setValue("");
    comp.contactForm.controls["Password"].setValue("");

    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it("form should be valid", async(() => {
    comp.contactForm.controls["Username"].setValue("test");
    comp.contactForm.controls["Password"].setValue("test");

    expect(comp.contactForm.valid).toBeTruthy();
  }));
});