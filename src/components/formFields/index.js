import { CheckMark } from "components/svgs";
import { cn } from "components/theme/utils";
import React from "react";

const inputTextStyle =
  "text-primary text-sm leading-[2.2em] outline-none w-full";

function InputLabel({ htmlFor, label, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(`
        text-[1.2rem]
        leading-[2.2em]
        text-primary
        ${className}
        `)}
    >
      {label}
    </label>
  );
}

const InputWrapper = ({ label, children, htmlFor }) => {
  return (
    <div className="input-wrapper relative isolate mt-10">
      {children}
      <InputLabel
        label={label}
        htmlFor={htmlFor}
        className={`
      absolute 
      left-0
      transition-all
      duration-300
      peer-placeholder-shown:text-sm 
      peer-placeholder-shown:top-0
      peer-focus:-z-10
      peer-focus:-top-6
      peer-focus:text-[1.2rem]
      -z-10
      -top-6
      `}
      />
    </div>
  );
};

export const TextInput = ({ id, label, type = "text", ...props }) => {
  return (
    <InputWrapper label={label} htmlFor={id}>
      <InputField id={id} label={label} type={type} {...props}></InputField>
    </InputWrapper>
  );
};
function InputField({ id, type, label, ...props }) {
  return (
    <input
      type={type}
      className={`peer bg-transparent border-b-2 border-primary placeholder:text-transparent ${inputTextStyle}`}
      id={id}
      placeholder={label}
      {...props}
    />
  );
}

export const CheckBox = ({ id, label }) => {
  return (
    <div className="flex mt-10 items-center">
      <CustomCheckbox id={id} />
      <InputLabel htmlFor={id} label={label} className={`ml-4`} />
    </div>
  );
};

const CustomCheckbox = ({ id }) => {
  return (
    <div className="custom-check-box w-8 h-8 bg-secondary border-2 border-primary relative isolate flex items-center justify-center">
      <input
        type="checkbox"
        id={id}
        className="w-full h-full opacity-0 peer absolute top-0 left-0"
      />
      <div className="check-mark absolute w-full h-full top-0 left-0 bg-primary -z-10 peer-checked:hidden flex items-center justify-center">
        <CheckMark className="text-secondary w-[80%]" />
      </div>
    </div>
  );
};
