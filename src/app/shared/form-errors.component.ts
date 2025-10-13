import { JsonPipe, KeyValuePipe } from "@angular/common";
import { Component, input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-errors",
  imports: [KeyValuePipe, JsonPipe],
  template: `
      @if (form().invalid) {
    <section id="errors">
        <p>Review this errors:</p>
        @for (control of form().controls | keyvalue; track control.key) {
          <ul>
            @let errors = control.value.errors;
            @if (errors) {
              <li>
                {{ control.key }}
                <small>{{ errors | json }}</small>
              </li>
            }
          </ul>
        } @empty {
          <p>No errors</p>
        }
      </section>
    }
  `,
})
export class FormErrorsComponent {
  public form = input.required<FormGroup>();
}
