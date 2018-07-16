import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import thunkMiddleware from "redux-thunk";

import layout, { actions as _layoutAction } from "containers/layout/reducer"; // 聊天列表

const rootReducer = combineReducers({
  layout
});

const initialState = Immutable.Map();

const appStore = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware)
  )
);
export default appStore;
export const layoutAction = _layoutAction;

export const actions = {
  layoutAction
}