import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducers from '../reducers'
import { apiClients } from '../middleware/api'
import { multiClientMiddleware } from 'redux-axios-middleware'

const store = createStore(appReducers, applyMiddleware(thunk, multiClientMiddleware(apiClients)))
export default store
