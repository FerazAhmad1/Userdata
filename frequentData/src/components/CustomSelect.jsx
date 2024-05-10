/* eslint-disable react/prop-types */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

export const CustomSelect = ({
  label,
  options,
  onChange,
  placeholder,
  color,
  Ref,
  type,
  value,
  disabled,
  error,
}) => {
  return (
    <FormControl id={label} isInvalid={!!error} position="relative">
      <FormLabel mb="6px" textColor={color || "black"} fontSize={14}>
        {label}
      </FormLabel>
      <Select
        className="w-full border border-gray-300 border-solid outline-none rounded-[6px] text-gray-800 placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus:border-transparent focus-visible:border-transparent"
        ref={Ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        _focusVisible={{}}
        _hover={{}}
      >
        {options.map(({ name, _id }) => {
          return (
            <option key={_id} value={_id}>
              {name}
            </option>
          );
        })}
      </Select>
      <FormErrorMessage position={"absolute"}>{error}</FormErrorMessage>
    </FormControl>
  );
};
