import React from 'react'
import { Link } from 'react-router-dom'
import MasterSign from '../../components/sign/MasterSign'

function Login() {
  const groupSign = { title: `Hello! let's get started`, content: 'Sign in to continue.' }
  return (
    <MasterSign data={groupSign}>
      <form className="pt-3">
        <div className="form-group">
          <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mt-3">
          <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="../../index.html">
            SIGN IN
          </Link>
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
  )
}

export default Login
