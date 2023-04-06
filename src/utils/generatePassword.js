/* eslint-disable import/prefer-default-export */
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = lowercaseChars.toUpperCase();
const numbers = '0123456789';
const specialChars = '!@#$%^&+=';
const allChars = lowercaseChars + uppercaseChars + numbers + specialChars;

export function generatePassword() {
  let password = '';

  while (password.length < 9) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  if (!password.match(/[a-z]/)) {
    password = password.slice(0, 1) + lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)] + password.slice(1);
  }

  if (!password.match(/[A-Z]/)) {
    password = password.slice(0, 1) + uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)] + password.slice(1);
  }

  if (!password.match(/[0-9]/)) {
    password = password.slice(0, 1) + numbers[Math.floor(Math.random() * numbers.length)] + password.slice(1);
  }

  if (!password.match(/[!@#$%^&+=]/)) {
    password = password.slice(0, 1) + specialChars[Math.floor(Math.random() * specialChars.length)] + password.slice(1);
  }

  return password;
}