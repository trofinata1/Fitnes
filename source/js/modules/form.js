import {sendData} from './api';
import {onSuccessSubmit, onErrorSubmit} from './show-error-or-success';

const SENDING_DATA_URL = 'https://echo.htmlacademy.ru/';
const form = document.querySelector('.form');
const submitButton = document.querySelector('[type="submit"]');

export const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

export const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const inputName = evt.target.querySelector('[type="text"]');
  const inputTel = evt.target.querySelector('[type="tel"]');

  if (inputName.checkValidity() && inputTel.checkValidity()) {

    blockSubmitButton();
    sendData(SENDING_DATA_URL, onSuccessSubmit, onErrorSubmit, formData);

    localStorage.name = inputName.value;
    localStorage.tel = inputTel.value;
  }
};

export const onFormReset = () => {
  form.reset();
};

export const interactWithForm = () => {

  let forms = document.querySelectorAll('.form');

  forms.forEach(function (item) {
    item.addEventListener('submit', onFormSubmit);
    item.addEventListener('reset', onFormReset);
  });
};
