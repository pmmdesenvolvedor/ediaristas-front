import React from 'react';
import TextField from 'ui/components/inputs/TextField/TextField';
import { OutlinedTextFieldProps } from '@material-ui/core';
import InputMask from 'react-input-mask';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
