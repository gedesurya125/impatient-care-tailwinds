import React from "react";

const inputTextStyle =
  "text-primary text-sm leading-[2.2em] outline-none w-full";
const InputWrapper = ({ label, children, inputId }) => {
  return (
    <div className="input-wrapper relative isolate">
      {children}
      <label
        htmlFor={inputId}
        className={`
        absolute 
        left-0
        transition-all
        duration-300
        peer-placeholder-shown:text-sm 
        peer-placeholder-shown:leading-[2.2]
        peer-placeholder-shown:top-0
        peer-focus:-z-10
        peer-focus:-top-6
        peer-focus:text-[1.2rem]
        -z-10
        -top-6
        text-[1.2rem]
        leading-[2.2em]
        text-primary
        `}
      >
        {label}
      </label>
    </div>
  );
};
export const TextInput = ({ id, label }) => {
  return (
    <InputWrapper label={label} inputId={id}>
      <input
        type="text"
        className={`peer bg-transparent border-b-2 border-primary placeholder:text-transparent ${inputTextStyle}`}
        id={id}
        placeholder={label}
      />
    </InputWrapper>
  );
};
