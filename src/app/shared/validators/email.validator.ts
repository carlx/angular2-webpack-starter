import { FormControl } from '@angular/forms';

export function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /\S+@\S+\.\S+/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    email: true
  };
}
