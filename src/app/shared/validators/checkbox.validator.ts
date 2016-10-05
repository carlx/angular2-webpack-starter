import { FormControl } from '@angular/forms';

export function validateCheckBox(c: FormControl) {
  return (c.value) ? null : {
    required: true
  };
}
