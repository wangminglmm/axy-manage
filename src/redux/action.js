export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUT'
export function setUser(user){
  return {
    type: SET_USER,
    payload: user
  }
}
export function signOut(){
  return {
    type: SIGN_OUT,
  }
}