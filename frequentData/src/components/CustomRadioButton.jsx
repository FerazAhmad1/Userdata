/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export const CustomRadioButton = ({
  label,
  options,
  onChange,
  color,
  value,
  disabled,
}) => {
  return (
    <FormControl>
      <FormLabel mb="6px" textColor={color || "black"} fontSize={14}>
        {label}
      </FormLabel>
      <RadioGroup onChange={onChange} value={value} mt={3}>
        <Stack direction="row">
          {options.map((option, index) => (
            <Radio
              key={index}
              value={option.value}
              isDisabled={disabled}
              colorScheme="purple"
            >
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};
