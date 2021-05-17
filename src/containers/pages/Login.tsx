import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import MasterSign from '../../components/sign/MasterSign'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

function Login(props: any) {
  const [login, setLogin] = useState<any>({ username: '', password: '' })
  const [erorr, setErorr] = useState<string>('')
  const groupSign = { title: `Hello! let's get started`, content: 'Sign in to continue.' }
  const handleInputLogin = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const onLogin = (e: any) => {
    e.preventDefault()
    props.actions.authLogin(login).then((res: any) => {
      console.log(res)
      if (res && res.error && res.error.status === 0) {
        setErorr('Vui lòng nhập lại tài khoản')
      }
    })
  }
  return (
    <>
      {props.auth && <Redirect to="/list/user" />}
      <MasterSign data={groupSign}>
        <form className="pt-3" onSubmit={onLogin}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              onChange={handleInputLogin}
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              onChange={handleInputLogin}
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="off"
            />
            <p className="text-danger">{erorr}</p>
          </div>
          <div className="mt-3">
            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
          </div>
          <div className="my-2 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input" />
                Keep me signed in
                <i className="input-helper" />
              </label>
            </div>
            <Link to="#" className="auth-link text-black">
              Forgot password?
            </Link>
          </div>
          <div className="mb-2">
            <button type="button" className="btn btn-block btn-facebook auth-form-btn">
              <i className="fa fa-facebook mr-2" aria-hidden="true"></i>
              Connect using facebook
            </button>
          </div>
          <div className="text-center mt-4 font-weight-light">
            Don't have an account?{' '}
            <Link to="register.html" className="text-primary">
              Create
            </Link>
          </div>
        </form>
      </MasterSign>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth.token,
})

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
