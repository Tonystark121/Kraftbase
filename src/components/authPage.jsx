import React from 'react'
import {Outlet} from 'react-router-dom'

const authPage = () => {
  return (
    <div>
        <div>
            Welcome to Kraffbase
        </div>
        <Outlet />
    </div>
  )
}

export default authPage
