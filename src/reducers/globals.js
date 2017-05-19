import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  homeTab: 'discover',
});
const homeTab = (state, action) => ({
  ...state,
  homeTab: action.homeTab,
});

const actionHandlers = {
  [Types.SET_HOME_TAB]: homeTab,
};
export default createReducer(initialState, actionHandlers);

