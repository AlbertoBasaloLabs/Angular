import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

export function showInvalid(
  controlName: string,
  form: FormGroup
): boolean | undefined {
  const control = form.get(controlName);
  if (!control) return undefined;
  if (control.pristine) return undefined;
  return control.invalid;
}
