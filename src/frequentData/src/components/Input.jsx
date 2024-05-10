/* eslint-disable react/prop-types */

import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

// Reusable Input component
export const Input = ({
  label,
  color,
  value,
  disabled,
  Ref,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <FormControl id={label} isInvalid={!!error} position={"relative"}>
      <FormLabel mb="6px" textColor={color || "black"} fontSize={14}>
        {label}
      </FormLabel>
      <ChakraInput
        className="w-full border border-gray-300 border-solid outline-none rounded-[6px] text-gray-800 placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus:border-transparent focus-visible:border-transparent"
        ref={Ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        _focusVisible={{}}
        _hover={{}}
      />
      <FormErrorMessage position={"absolute"}>{error}</FormErrorMessage>
    </FormControl>
  );
};
