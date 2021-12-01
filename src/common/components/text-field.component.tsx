import React from 'react';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextField: React.FC<Props> = props => {
  const { label, value, onChange } = props;
  return (
    <MuiTextField
      label={label}
      value={value}
      variant="outlined"
      onChange={e => onChange(e.target.value)}
    ></MuiTextField>
  );
};
