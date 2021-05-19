import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

function Sidebar(props: any) {
  const [clicked, setClicked] = useState(null)

  const handleOnClick = (index: any) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {SidebarData.map((item: any, index: any) => {
          return (
            <li className="nav-item" key={index}>
              <Link
                className="nav-link"
                data-toggle="collapse"
                to="#ui-basic"
                aria-expanded={clicked === index ? true : false}
                aria-controls="ui-basic"
                onClick={() => handleOnClick(index)}
              >
                <i className={item.iconLeft} aria-hidden="true"></i>
                <span className="menu-title">{item.title}</span>
                <i className={item.iconRight}></i>
              </Link>
              {item.subNav &&
                item.subNav.map((nav: any, stt: number) => {
                  return (
                    <div className={clicked === index ? 'collapse show' : 'collapse'} id="ui-basic" key={stt}>
                      <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to={nav.path}>
                            {nav.title}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )
                })}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
