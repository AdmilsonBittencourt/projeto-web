import { forwardRef, useImperativeHandle, useRef } from "react";

type CustomInputHandle = {
  focusInput: () => void;
  clearInput: () => void;
};

const CustomInput = forwardRef<CustomInputHandle>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" />;
});

export function ParentComponent() {
  const inputComponentRef = useRef<CustomInputHandle>(null);

  return (
    <div>
      <CustomInput ref={inputComponentRef} />
      <button onClick={() => inputComponentRef.current?.focusInput()}>
        Focar
      </button>
      <button onClick={() => inputComponentRef.current?.clearInput()}>
        Limpar
      </button>
    </div>
  );
}
