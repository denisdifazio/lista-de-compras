import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  private fb: FormBuilder;
  private router: Router;
  private auth: AuthService;

  public frm: FormGroup;
  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;

  constructor(auth: AuthService, fb: FormBuilder, router: Router) {
    this.auth = auth;
    this.fb = fb;
    this.router = router;

    this.frm = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      password_confirm: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public async doSignUp() {
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }

    this.isBusy = true;
    this.hasFailed = false;

    const username = this.frm.get("username").value;
    const password = this.frm.get("password").value;

    this.hasFailed = !(await this.auth.register(username, password));
    this.isBusy = false;

    if (!this.hasFailed) {
      this.router.navigate(["compras"]);
    }
  }

  public cancelar() {
    this.router.navigate(["login"])

  }
}
