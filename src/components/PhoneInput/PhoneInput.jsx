import React from 'react';
import TextField from '@material-ui/core/TextField';
import { conformToMask } from 'vanilla-text-mask';

const phoneNumberMask = [
  '+',
  '7',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
];

// see https://github.com/text-mask/text-mask/issues/230
const overridedKeyDownHandler = e => {
  const cursorPos = Number(e.target.selectionStart);
  const keyCode = Number(e.keyCode);

  if (keyCode === 8) {
    e.preventDefault();
    e.stopPropagation();

    e.target.value =
      e.target.value.substring(0, cursorPos - 1) +
      '' +
      e.target.value.substring(cursorPos, e.target.value.length);
    e.target.setSelectionRange(cursorPos, cursorPos);
  }
};

const PhoneInput = props => (
  <TextField
    {...props}
    onKeyDown={overridedKeyDownHandler}
    onChange={e => {
      const newValue = conformToMask(e.target.value, phoneNumberMask, {
        guide: false,
        keepCharPositions: true
      }).conformedValue;

      e.target.value = newValue;

      props.onChange(e);
    }}
  />
);

export default PhoneInput;
