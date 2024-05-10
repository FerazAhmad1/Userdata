/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Input } from "./Input";
import { Flex, Button, Text, Grid } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import { CustomSelect } from "./CustomSelect";
import { CustomRadioButton } from "./CustomRadioButton";
import { genderOptions, regex } from "../constants";
import { DateInput } from "./DateInput";

import {
  calculateAge,
  getCities,
  getCountryOptions,
  getStates,
} from "../utils";
import axios from "axios";

const calculateMinDate = () => {
  const today = new Date();
  const minYear = today.getFullYear() - 99;
  const minDate = new Date(minYear, today.getMonth(), today.getDate())
    .toISOString()
    .split("T")[0];
  // console.log({ minDate });
  return minDate;
};

const calculateMaxDate = () => {
  const today = new Date();
  const maxYear = today.getFullYear() - 14;
  const maxDate = new Date(maxYear, today.getMonth(), today.getDate())
    .toISOString()
    .split("T")[0];
  // console.log({ maxDate });
  return maxDate;
};

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [allCountry, setAllCountry] = useState([]);
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("1");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const [isFormDirty, setFormDirty] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/country");
      const data = await response.data.data;

      setAllCountry(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetchstate = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/state/${country}`
      );
      console.log(response.data);
      const data = response.data.data.states;
      setAllState(data);
    };
    fetchstate();
  }, [country]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/city/${state}`
      );
      setAllCity(response.data.data.cities);
    };
    fetchCities();
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormDirty(true);
    const response = await axios.post(`http://localhost:3000/api/v1/user`, {
      firstName,
      lastName,
      email,
      dob,
      age,
      country,
      state,
      city,
      gender,
    });
    console.log(response);
    // Handle form submission logic
  };

  const getErrorForEmail = (value) => {
    if (isFormDirty) {
      if (!value.trim()) {
        return "Email is required";
      }
      if (value && !value.match(regex.emailRegex)) {
        return "Email is Invalid";
      }
    }
    return "";
  };

  return (
    <>
      <Text
        as={"h2"}
        fontSize="24px"
        marginX="auto"
        className=" text-purple-800 "
        fontWeight="500"
        width="fit-content"
        mt={12}
      >
        {" "}
        Register{" "}
      </Text>
      <Flex
        className="bg-white w-[95%] border border-gray-100 mt-12 sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-lg shadow-lg"
        overflow="hidden"
        p="32px"
        mx="auto"
        direction="column"
      >
        <form onSubmit={handleSubmit}>
          <Grid
            flexWrap={wrap}
            rowGap={8}
            columnGap={6}
            className="grid-cols-1 md:grid-cols-2"
          >
            <Input
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              error={
                firstName.trim() == "" && isFormDirty
                  ? "First Name is required"
                  : ""
              }
              value={firstName}
              onChange={(e) => {
                const value = e.target.value;
                if (value.match(regex.alphabetOnly)) {
                  setFirstName(value);
                }
              }}
            />
            <Input
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={
                lastName.trim() == "" && isFormDirty
                  ? "Last Name is required"
                  : ""
              }
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={getErrorForEmail(email)}
            />

            <CustomSelect
              label="Country"
              options={allCountry}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              placeholder="Select a country"
              color="black"
              value={country}
              error={
                country.trim() == "" && isFormDirty ? "Country is required" : ""
              }
            />
            <CustomSelect
              label="State"
              options={allState}
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Select a state"
              color="black"
              error={
                state.trim() == "" && isFormDirty ? "State is required" : ""
              }
            />
            <CustomSelect
              label="City"
              options={allCity}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Select a city"
              color="black"
              error={city.trim() == "" && isFormDirty ? "City is required" : ""}
            />
            <CustomRadioButton
              label="Gender"
              options={genderOptions}
              onChange={setGender}
              value={gender}
            />
            <DateInput
              minDate={calculateMinDate()}
              maxDate={calculateMaxDate()}
              label="Date of birth"
              placeholder="Enter your date of birth"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setAge(calculateAge(e.target.value));
              }}
              error={
                dob.trim() == "" && isFormDirty
                  ? "Date of birth is required"
                  : ""
              }
            />
            <Input
              label="Age"
              placeholder="Your age is shown here"
              type="text"
              value={age}
              disabled
            />
          </Grid>
          <Flex justifyContent="center">
            <Button
              type="submit"
              colorScheme="purple"
              mt={12}
              mx="auto"
              w="fit-content"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default Form;
