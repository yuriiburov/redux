import { SET_LANG } from './language.actions';

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return action.payload.lang;
    default:
      return state;
  }
};
