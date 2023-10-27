import getValidate from '../../lib/validator';

const formEl = document.getElementById('form') as HTMLFormElement;
const btnEl = document.getElementById('form-btn') as HTMLButtonElement;

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

  const {message, isValid } = validator(target.value, target.name);
  if (message) {
    target.classList.add(invalidClass);
  } else {
    target.classList.remove(invalidClass);
  }
  if (errorEl) {
    //ts error
    errorEl?.textContent = message;
  }

  btnEl.disabled = !isValid;
};

const form = () => {
  const inputs: NodeList | undefined = formEl?.querySelectorAll(inputClass);

  inputs?.forEach((el) => el.addEventListener('blur', blurHandler));
};

export default form;
