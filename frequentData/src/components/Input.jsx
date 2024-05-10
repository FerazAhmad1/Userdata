/* eslint-disable react/prop-types */

import { Input as ChakraInput, FormControl, FormLabel } from "@chakra-ui/react";

// Reusable Input component
export const Input = ({ label, color, Ref, placeholder, type, onChange }) => {
  return (
    <FormControl id={label} mb="4">
      <FormLabel textColor={color}>{label}</FormLabel>
      <ChakraInput
        className="p-3 border border-blue-500 border-solid outline-none "
        ref={Ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};
