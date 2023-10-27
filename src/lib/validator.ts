const errorMessages = {
  requared: 'This field is requared',
  email: 'Write correct e-mail',
};

// class Validator {
//   private emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

//   constructor(values) {
//     this.values = values;
//   }

//   validate(val: string, type: string): string {
//     const value = val.trim();
//     if (value.length < 1) {
//       return errorMessages.requared;
//     } if (type === 'email') {
//       const message = this.emailRegex.test(value) ? '' : errorMessages.email;
//       return message;
//     }
//     return '';
//   }
// }



const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const validator = (val: string, type: string): string => {
  const value = val.trim();
  if (value.length < 1) {
    return errorMessages.requared;
  } if (type === 'email') {
    const message = emailRegex.test(value) ? '' : errorMessages.email;
    return message;
  }
  return '';
};

// export const isValidFields = ():boolean => {
//   let allTrue = Object.keys(validateValues).every((item) => {
//     return validateValues[item] === ''
//   });
//   return allTrue;
// }

export default validator;
