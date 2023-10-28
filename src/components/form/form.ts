import IMask from 'imask';
import getValidate from '../../lib/validator';
import registration from '../../api/registration';
import setScrollAndActive from '../../lib/setScrollAndActive';

type ValidateRequest = {
  status: string;
  message: string;
};

const formEl = document.getElementById('form') as HTMLFormElement;
const btnEl = document.getElementById('form-btn') as HTMLButtonElement;
const spinnerEl = document.getElementById('spinner') as HTMLDivElement;
const messageEl = document.getElementById('message') as HTMLParagraphElement;

const inputClass = '.form-group__input';
const invalidClass = 'invalid';

const initState = {
  name: false,
  phone: false,
  message: false,
  email: false,
};

const validator = getValidate(initState);

const blurHandler = (e:Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  const errorEl = target.nextElementSibling;

  const { message, isValid } = validator(target.value, target.name);
  if (message) {
    target.classList.add(invalidClass);
  } else {
    target.classList.remove(invalidClass);
  }
  if (errorEl) {
    errorEl?.textContent = message;
  }

  btnEl.disabled = !isValid;
};

const submitHandler = async (e: Event) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  setScrollAndActive(true, spinnerEl);

  try {
    const res: ValidateRequest = await registration(formData);
    messageEl.textContent = res.message;

    if (res.status === 'success') {
      formEl.reset();
      messageEl.style.color = 'green';

      setTimeout(() => {
        messageEl.textContent = '';
      }, 3000);
    } else {
      messageEl.style.color = 'red';
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  setScrollAndActive(false, spinnerEl);
};

const addMask = () => {
  const phoneInput = formEl.querySelector('.js-phone');

  const maskOptions = {
    mask: '+{375} (00) 000 00 00',
    lazy: false,
    placeholderChar: '_',
  };
  IMask(phoneInput, maskOptions);
};

const form = () => {
  addMask();

  const inputs: NodeList | undefined = formEl?.querySelectorAll(inputClass);

  inputs?.forEach((el) => el.addEventListener('blur', blurHandler));

  formEl.addEventListener('submit', submitHandler);
};

export default form;
