import React from "react";
import { InputPropsWithoutRef } from "react-html-props";
import { twMerge } from "tailwind-merge";

export interface ITextInputProps extends InputPropsWithoutRef {}

export const TextInput = React.forwardRef<any, ITextInputProps>(
  ({ ...props }, ref) => (
    <input
      {...props}
      className={twMerge(
        "input w-full bg-[#0C111A] mx-auto dark:bg-white rounded text-white dark:text-foreground-secondary border-1 p-3 border dark:border-[#BFCBD9] border-[#6A8099] focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent",
        props.className
      )}
      ref={ref}
    />
  )
);

export default TextInput;