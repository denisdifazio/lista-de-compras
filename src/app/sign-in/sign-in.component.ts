import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
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
      password: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public async doSignIn() {
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }

    this.isBusy = true;
    this.hasFailed = false;

    const username = this.frm.get("username").value;
    const password = this.frm.get("password").value;

    this.hasFailed = !(await this.auth.login(username, password));
    this.isBusy = false;

    if (!this.hasFailed) {
      this.router.navigate(["compras"]);
    }
  }
}
