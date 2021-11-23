export const getPerson = (person) => {
    return { type: "GET_PERSON", payload: person };
  };
  export const removePerson = (person) => {
    return { type: "REMOVE_PERSON", payload: person };
  };