import { FormControl } from '@angular/forms';

export function validatePhone(c: FormControl) {
  let EMAIL_REGEXP = /^(?:\(?\+?48)?(?:[-\.\(\)\s]*(\d)){9}\)?/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    phone: true
  };
}
