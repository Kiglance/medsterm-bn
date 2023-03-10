export function generatePassword() {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&()';
  let password = '';

  while (password.length < 8) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
