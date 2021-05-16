import React from 'react'
import { Link } from 'react-router-dom'

function Header(props:any) {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to="../../index.html">
          <img src={require('../../statics/images/logo.svg').default} className="mr-2" alt="logo 1" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="../../index.html">
          <img src={require('../../statics/images/logo-mini.svg').default} alt="logo 2" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button onClick={props.onClickSidebar}className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown mr-1">
            <Link
              className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
              id="messageDropdown"
              to="#"
              data-toggle="dropdown"
            >
              <i className="fa fa-envelope-o mx-0" aria-hidden="true"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src={require('../../statics/images/faces/face4.jpg').default}
                    alt="face4"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">David Grey</h6>
                  <p className="font-weight-light small-text text-muted mb-0">The meeting is cancelled</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src={require('../../statics/images/faces/face2.jpg').default}
                    alt="face2"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                  <p className="font-weight-light small-text text-muted mb-0">New product launch</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <img
                    src={require('../../statics/images/faces/face3.jpg').default}
                    alt="face3"
                    className="profile-pic"
                  />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                  <p className="font-weight-light small-text text-muted mb-0">Upcoming board meeting</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              to="#"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o mx-0" aria-hidden="true"></i>
              <span className="count" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-success">
                    <i className="ti-info-alt mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-warning">
                    <i className="ti-settings mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-info">
                    <i className="ti-user mx-0" />
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" id="profileDropdown">
              <img src={require('../../statics/images/faces/face28.jpg').default} alt="profile" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <div className="dropdown-item">
                <i className="ti-settings text-primary" />
                Settings
              </div>
              <div className="dropdown-item">
                <i className="ti-power-off text-primary" />
                Logout
              </div>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="ti-view-list" />
        </button>
      </div>
    </nav>
  )
}

export default Header
