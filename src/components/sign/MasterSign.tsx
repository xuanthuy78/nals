import React from 'react'
import logo from '../../statics/images/logo.svg'

function MasterSign(props:any) {
	const childrenWithProps = React.Children.map(props.children, (child) => React.cloneElement(child, {}));

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={logo} alt="logo" />
                </div>
                <h4>{props.data.title}</h4>
                <h6 className="font-weight-light">{props.data.content}</h6>
								{childrenWithProps}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterSign
