import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Subscription } from "rxjs";

@Directive({
  selector: "[compare]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareValidatorsDirective,
      multi: true
    }
  ]
})
export class CompareValidatorsDirective {
  @Input("compare")
  controlNameToCompare;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === null) {
      return null;
    }

    const controlToCompare = control.root.get(this.controlNameToCompare);

    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(
        () => {
          control.updateValueAndValidity();
          subscription.unsubscribe();
        }
      );
    }

    return controlToCompare && controlToCompare.value !== control.value
      ? { compare: true }
      : null;
  }
}
