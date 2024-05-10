/* eslint-disable no-useless-escape */
export const genderOptions = [
  { label: "Male", value: "1" },
  { label: "Female", value: "2" },
  { label: "Others", value: "3" },
];
export const regex = {
  alphabetOnly: /^[a-zA-Z]*$/,
  emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const addressObject = {
  India: {
    value: 1,
    states: {
      Assam: {
        value: 10,
        city: {
          Guwahati: {
            value: 100,
          },
          Dhubri: {
            value: 101,
          },
        },
      },
      Bihar: {
        value: 100,
        city: {
          Patna: {
            value: 1000,
          },
          Chhapra: {
            value: 1001,
          },
        },
      },
    },
  },
  USA: {
    value: 2,
    states: {
      California: {
        value: 20,
        city: {
          LosAngeles: {
            value: 200,
          },
          SanFrancisco: {
            value: 201,
          },
        },
      },
      Texas: {
        value: 21,
        city: {
          Houston: {
            value: 210,
          },
          Austin: {
            value: 211,
          },
        },
      },
    },
  },
  Canada: {
    value: 3,
    states: {
      Ontario: {
        value: 30,
        city: {
          Toronto: {
            value: 300,
          },
          Ottawa: {
            value: 301,
          },
        },
      },
      BritishColumbia: {
        value: 31,
        city: {
          Vancouver: {
            value: 310,
          },
          Victoria: {
            value: 311,
          },
        },
      },
    },
  },
};
