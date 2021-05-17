import { AUTH_LOGIN } from '../constants/ActionTypes'
const initialState: Object = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  status: '',
}

const Auth = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem('token', action.payload.data.token)
      return {
        ...state,
        token: action.payload.data.token,
      }
    default:
      return state
  }
}

export default Auth
