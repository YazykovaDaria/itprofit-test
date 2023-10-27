import './index.html';
import 'reset-css';
import './global.scss';
import app from './app/app';

app();

// import MaskInput from 'mask-input';


// // import { MaskedTextChangedListener } from 'ts-input-mask';
// const email = document.getElementById('email');

// const MaskInput = new PlainMaskInput(document.querySelector('.js-input'), {
//   mask: '0000-0000-0000-0000',
// });

// const listener: MaskedTextChangedListener = MaskedTextChangedListener.installOn(' +([375]) [00]-[000]-[00]-[00]', email)
// const listener: MaskedTextChangedListener = MaskedTextChangedListener.installOn(
//   primaryFormat,
//   email,
//   new class implements MaskedTextChangedListener.ValueListener {
//       public onTextChanged( \\ method called when value changes
//           maskFilled: boolean, \\ true when mask is filled
//           extractedValue: string, \\ text without placeholder: 1234567890
//           formattedText: string  \\ text with placeholder +7 (123) 456-78-90
//       ): void {
//           console.log(maskFilled, extractedValue, formattedText);
//       }
//   }(),
//   affineFormats,
//   customNotations,
//   affinityCalculationStrategy,
//   autocomplete
// );
