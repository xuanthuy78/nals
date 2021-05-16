import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar(props:any) {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="../../index.html">
            <i className="fa fa-tachometer menu-icon" aria-hidden="true"></i>

            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-toggle="collapse"
            to="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
            onClick = {(event)=>props.onClickMenuChild(event)}
          >
            <i className="fa fa-superpowers menu-icon" aria-hidden="true"></i>
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow"></i>
          </Link>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/ui-features/buttons.html">
                  Buttons
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/ui-features/typography.html">
                  Typography
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../pages/forms/basic_elements.html">
            <i className="fa fa-keyboard-o menu-icon" aria-hidden="true"></i>

            <span className="menu-title">Form elements</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../pages/charts/chartjs.html">
            <i className="fa fa-line-chart menu-icon" />
            <span className="menu-title">Charts</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="../../pages/tables/basic-table.html">
            <i className="fa fa-table menu-icon" />
            <span className="menu-title">Tables</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../pages/icons/themify.html">
            <i className="fa fa-star-o menu-icon" />
            <span className="menu-title">Icons</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" data-toggle="collapse" to="#auth" onClick = {props.onClickMenuChild} aria-expanded="false" aria-controls="auth">
            <i className="fa fa-user-o menu-icon" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </Link>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/samples/login.html">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/samples/login-2.html">
                  Login 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/samples/register.html">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/samples/register-2.html">
                  Register 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../../pages/samples/lock-screen.html">
                  Lockscreen
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../documentation/documentation.html">
            <i className="fa fa-file-text-o menu-icon" />
            <span className="menu-title">Documentation</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
