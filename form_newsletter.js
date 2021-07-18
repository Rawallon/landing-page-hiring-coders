'use strict';
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
function fillForm() {
  const storage = localStorage.getItem('newsletter');
  if (storage) {
    const { name, email, phone } = JSON.parse(storage);
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
  }
}

function submitForm() {
  localStorage.setItem(
    'newsletter',
    JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    }),
  );
  return false;
}

fillForm();
