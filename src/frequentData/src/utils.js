import { addressObject } from "./constants";

export function calculateAge(value) {
  const age = Math.floor(
    (new Date() - new Date(value)) / (365.25 * 24 * 60 * 60 * 1000)
  );
  return age;
}

export const getCountryOptions = () => {
  return Object.keys(addressObject).map((key) => {
    return { label: key, value: key };
  });
};

export function getStates(countryName) {
  const country = addressObject[countryName];
  if (country && country.states) {
    return Object.keys(country.states).map((key) => {
      return {
        label: key,
        value: key,
      };
    });
  } else {
    return [];
  }
}

export function getCities(countryName, stateName) {
  const country = addressObject[countryName];
  if (country && country.states && country.states[stateName]) {
    return Object.keys(country.states[stateName].city).map((key) => {
      return {
        label: key,
        value: key,
      };
    });
  } else {
    return [];
  }
}
