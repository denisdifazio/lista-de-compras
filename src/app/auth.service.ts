import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public afAuth: AngularFireAuth;

  constructor(afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
  }

  isSignedIn() {
    return !!this.afAuth.auth.currentUser;
  }

  async login(email: string, password: string): Promise<boolean> {
    if (!email || !password) {
      return false;
    }

    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      return false;
    }
    return true;
  }

  async register(email: string, password: string) {
    if (!email || !password) {
      return false;
    }

    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Email inválido");
          break;
        case "auth/email-already-in-use":
          alert("Email já cadastrado");
          break;
        case "auth/weak-password":
          alert("Senha inválida");
          break;
      }
      return false;
    }
    return true;
  }

  get uid() {
    let uid = "";
    this.afAuth.authState.subscribe(user => (uid = user.uid));
    return uid;
  }
}
