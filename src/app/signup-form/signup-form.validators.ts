import { ValidatorFn } from '@angular/forms';

const mostCommonPasswords = new Set([
  'qwerty',
  'password',
  '1234',
  '12345',
  '12345678',
  '111111',
  '1234567',
  '123123',
  'qwerty123',
]);

export const forbiddenPasswordValidator: ValidatorFn = (ctrl) => {
  if (mostCommonPasswords.has(ctrl.value)) {
    return { forbiddenPassword: ctrl.value };
  }

  return null;
};
