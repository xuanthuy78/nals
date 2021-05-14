import React from 'react'
import MasterSign from '../../components/sign/MasterSign'

export default function Register() {
  const groupSign = {title: `New here?`, content:'Signing up is easy. It only takes a few steps'}
  return (
    <MasterSign data={groupSign}>
      <form className="pt-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            id="exampleInputUsername1"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <select className="form-control form-control-lg" id="exampleFormControlSelect2">
            <option>Country</option>
            <option>United States of America</option>
            <option>United Kingdom</option>
            <option>India</option>
            <option>Germany</option>
            <option>Argentina</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              I agree to all Terms &amp; Conditions
              <i className="input-helper" />
            </label>
          </div>
        </div>
        <div className="mt-3">
          <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">
            SIGN UP
          </a>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Already have an account?{' '}
          <a href="login.html" className="text-primary">
            Login
          </a>
        </div>
      </form>
    </MasterSign>
  )
}
