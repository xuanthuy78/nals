import { Login, Register } from '../containers/pages'

export const routes_not_auth = [
  { path: '/login', exact: true, main: () => <Login /> },
  { path: '/register', exact: true, main: () => <Register /> },
]
export const routes_auth = []
