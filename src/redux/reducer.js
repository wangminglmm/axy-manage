import { SET_USER,SIGN_OUT } from './action'
import { combineReducers } from 'redux'
const userInit = {
  userName:'wangming',
  power: 'agent'
}
export function user(state=userInit,action){
  switch(action.type){
    case SET_USER:
    return {...state,...action.payload}
    case SIGN_OUT:
    return {};
    default: 
    return state
  }
}
export default combineReducers({
  user
})