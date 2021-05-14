import { Login } from '../containers/pages'

export const routes_not_auth = [{ path: '/login', exact: true, main: () => <Login /> }]
export const routes_auth = []
