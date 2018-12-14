import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const NODE_ENV = process.env.NODE_ENV || "development"

export const InitialState = {
  
}

export const actionTypes = {
    UPDATE_STATE = "UPDATE_STATE" 
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_STATE:
      return Object.assign({}, state, {
        [action.key]: action.payload
      })
    default: return state
  }
}

//ACTION
export const updateState = (key, value) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.UPDATE_STATE,
        payload: value,
        key
    })
}


export function initializeStore (initialState = InitialState) {
  if(NODE_ENV=="production"){
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  }
}