import validator from '../../lib/validator';

const formEl = document.getElementById('form') as HTMLFormElement;
const btnEl = document.getElementById('form-btn') as HTMLButtonElement;

const inputValidator = {
  name: false,
  phone: false,
  message: false,
  email: false,
};

const isDirty = {
  name: true,
  phone: true,
  message: true,
  email: true,
}

const inputClass = '.form-group__input';
const invalidClass = 'invalid';

// const errorArr: string[] = [];
// let flag:boolean = true;

const btnDis = () => {
  // console.log(inputValidator);

  const allTrue = Object.keys(inputValidator).every((item) => inputValidator[item] === false);

  const allNotDirty = Object.keys(isDirty).every((item) => isDirty[item] === false);
  console.log(allNotDirty);
  btnEl.disabled = !(allTrue && allNotDirty);
  // if (allTrue) {
  //   btnEl.disabled = false;
  // } else {
  //   btnEl.disabled = true;
  // }
};

const blurHandler = (e:Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  const errorEl = target.nextElementSibling;
isDirty[target.name] = false;

  if (errorEl) {
    const validateMessage = validator(target.value, target.name);
    if (validateMessage) {
      target.classList.add(invalidClass);
      inputValidator[target.name] = true;
    } else {
      target.classList.remove(invalidClass);
      inputValidator[target.name] = false;
    }
    errorEl?.textContent = validateMessage;
  }
  btnDis();
};

const form = () => {
  const inputs: NodeList | undefined = formEl?.querySelectorAll(inputClass);

  inputs?.forEach((el) => el.addEventListener('blur', blurHandler));

  // const isValidFields = Array.from(inputs).every((input) => !(input.matches(invalidClass)));
  // console.log(isValidFields);

  // flag = isValidFields;
  // console.log(flag);

  // console.log(flag);

  // btnEl.disabled = isValidFields();
};

export default form;
