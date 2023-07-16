import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../helpers";

interface TextInputFieldProps {
  onChange?: (event: any) => void;
  defaultValue?: string;
  textFieldTitle?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  type?: string;
  inputAccepted?: boolean;
  tabIndex?: number;
  autofocus?: boolean;
}

const InputField = styled.input<{ inputAccepted?: boolean }>`
  outline: none;
  width: 100%;
  font-size: 18px;
  border-bottom: ${(props) =>
    props.inputAccepted ? `2px solid green` : "1px solid black"};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: black;

  ::placeholder {
    color: grey;
    font-style: italic;
  }

  :disabled {
    background: transparent;
    color: #9d9999;
  }

  ${MediaQuery.XS} {
    font-size: 14px;
  }
`;

const EndIcon = styled.i`
  position: absolute;
  right: 24px;
  bottom: 8px;
`;

const TextInput: React.FC<TextInputFieldProps> = ({
  onChange,
  defaultValue,
  textFieldTitle,
  placeholder,
  disabled,
  id,
  name,
  value,
  required,
  type,
  inputAccepted,
  tabIndex,
  autofocus,
}) => {
  return (
    <div>
      {textFieldTitle && <body>{textFieldTitle}:</body>}
      <InputField
        id={id}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        required={required}
        type={type}
        inputAccepted={inputAccepted}
        tabIndex={tabIndex}
        autoFocus={autofocus}
      />
    </div>
  );
};

export default TextInput;
