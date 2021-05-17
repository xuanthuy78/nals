import * as types from '../constants/ActionTypes'

export const authLogin = (param: []) => (dispatch: any) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.AUTH_LOGIN, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `login`,
        method: 'POST',
        data: param,
      },
    },
  })
