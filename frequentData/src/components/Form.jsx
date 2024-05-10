/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "./Input";
import {
  Box,
  Flex,
  Select,
  Input as ChakraInput,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box
      className="bg-gray-400"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="8"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Flex flexWrap={wrap} justifyContent="space-between">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            type="text"
            color="white"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            color="white"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            color="white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Flex flexWrap="wrap">
          <Box mt={4}>
            <Flex alignItems="center">
              <label htmlFor="duration" className="mr-2">
                Duration:
              </label>
              <Select>
                {[1, 2, 3].map((month) => (
                  <option key={month} value={month}>
                    {month} month{month > 1 && "s"}
                  </option>
                ))}
              </Select>
            </Flex>
          </Box>
          <FormControl flex="1">
            <FormLabel>City</FormLabel>
            <Select value={city} onChange={(e) => setCity(e.target.value)}>
              {/* City options */}
            </Select>
          </FormControl>
        </Flex>
        <Flex flexWrap="wrap">
          <FormControl flex="1" mr="4">
            <FormLabel textColor="white">Gender</FormLabel>
            <Box mb={4} bg="white" width="fit-content" className="p-2">
              <RadioGroup
                className="flex gap-4"
                onChange={setGender}
                value={gender}
              >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </RadioGroup>
            </Box>
          </FormControl>
          <Input
            label="Date of Birth"
            type="date"
            color="white"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            error={
              dob &&
              ((new Date() - new Date(dob)) / (1000 * 60 * 60 * 24 * 365) <=
                14 ||
                (new Date() - new Date(dob)) / (1000 * 60 * 60 * 24 * 365) >=
                  99) &&
              "Age must be between 14 and 99 years"
            }
          />
          <Text>Age: {age}</Text>
        </Flex>
        <Button type="submit" mt="4">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
