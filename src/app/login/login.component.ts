import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: "./login.component.html"
})
export class loginComponent {
  //public router:Router;
  text = "Ulak User Login Page";
  users = [
    {
      id: 1,
      firstName: "Jason",
      lastName: "Watmore",
      username: "test",
      password: "test"
    },
    {
      id: 2,
      firstName: "Büşra",
      lastName: "Akın",
      username: "Busra",
      password: "busra"
    },
    {
      id: 4,
      firstName: "Melek",
      lastName: "Kılıç",
      username: "Melek",
      password: "melek"
    },
    {
      id: 6,
      firstName: "Jale",
      lastName: "Aslan",
      username: "Jale",
      password: "jale"
    },
    {
      id: 7,
      firstName: "Meriç",
      lastName: "Kaptan",
      username: "Meriç",
      password: "meriç"
    }
  ];
  contactForm: FormGroup;
  contact = {
    Username: "",
    Password: ""
  };
  submitted = false;

  constructor(private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      Username: new FormControl(this.contact.Username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      Password: new FormControl(this.contact.Password, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  /*
checkPasswords() { // here we have the 'passwords' group
  let uname = this.contactForm.controls['Username'].value;
  let pass =  this.contactForm.controls['Password'].value;

  const user = this.users.find(x => x.username === uname && x.password === pass);
  if(!user)
  {
    this.text = 'Username or Password is incorrect.';
    return false;
  }
  else
  {
    this.router.navigate(['/home']);
    return true;
  }
}
*/

  onSubmit(): void {
    this.submitted = true;

    let uname = this.contactForm.controls["Username"].value;
    let pass = this.contactForm.controls["Password"].value;

    const user = this.users.find(
      x => x.username === uname && x.password === pass
    );
    if (!user) {
      this.text = "Username or Password is incorrect.";
    } else {
      this.router.navigate(["/home"]);
    }
  }
}