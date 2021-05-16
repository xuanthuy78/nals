import React, { useState } from 'react'
import { Header, Sidebar, Footer } from './index'

function MasterLayout(props: any) {
  const showSidebar:any = localStorage.getItem("showSideBar")
  const [isShowSidebar, setIsShowSidebar] = useState<any>(showSidebar === 'false' ? true : false)
 
  const clickSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
    localStorage.setItem('showSideBar', isShowSidebar)
  }
  const clickMenuChild = (event:any) => {
    event.preventDefault();
    console.log('hello', event.target)
  }
  const childrenWithProps = React.Children.map(props.children, (child) => React.cloneElement(child, {}))
  return (
    <div className={isShowSidebar ? 'sidebar-icon-only' : 'container-scroller'}>
      <Header onClickSidebar={clickSidebar} />
      <div className="container-fluid page-body-wrapper">
        <Sidebar onClickMenuChild={clickMenuChild} />
        <div className="main-panel">
          <div className="content-wrapper">{childrenWithProps}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MasterLayout
