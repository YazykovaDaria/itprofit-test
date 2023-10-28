type InitState = {
  [key: string]: boolean;
};

type FormValidation = {
  isValid: boolean,
  message: string,
};

type Validator = (val: string, type: keyof InitState) => FormValidation;

const errorMessages = {
  requared: 'This field is requared',
  email: 'Write correct e-mail',
};

const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const checkValidation = (state: InitState) => Object.keys(state).every((item) => state[item] === true);

const checkPhoneData = (phone: string): string => {
  const maskPattern = '+375 (__) ___ __ __';
  return phone === maskPattern ? '' : phone;
};

const getValidate = (initState: InitState): Validator => {
  const isValidFields = initState;
  const isNotDirty = initState;

  const validator = (val: string, type: keyof InitState):FormValidation => {
    let message = '';
    isNotDirty[type] = true;

    const value = type === 'phone' ? checkPhoneData(val.trim()) : val.trim();

    if (value.length < 1) {
      message = errorMessages.requared;
    } else if (type === 'email') {
      message = emailRegex.test(value) ? '' : errorMessages.email;
    }

    isValidFields[type] = message.length === 0;

    const isValid = (checkValidation(isValidFields) && checkValidation(isNotDirty));

    return { message, isValid };
  };

  return validator;
};

export default getValidate;
