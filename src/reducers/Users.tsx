import { LIST_USER } from '../constants/ActionTypes'
const initialState: Object = {
  items: [],
}

const Users = (state = initialState, action: any) => {
  switch (action.type) {
    case LIST_USER:
      return {
        ...state,
        items: action.payload.data,
      }
    default:
      return state
  }
}

export default Users