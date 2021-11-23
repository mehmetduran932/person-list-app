import data from '../db/person-list.json'

const INITIAL_STATE = {
  person: data
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PERSON':
      return { ...state, person: [...state.person, action.payload] }
    case 'REMOVE_PERSON':
      return {
        ...state,
        person: action.payload
      }
    default:
      return state
  }
}
