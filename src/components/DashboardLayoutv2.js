import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../features/dashboard/Topbar'
import Sidebar from '../features/dashboard/Sidebar'

const DashboardLayoutv2 = () => {
    return (
        <div >

            <div className="main">
                <Sidebar />
                <Topbar />

                <Outlet />

            </div>
            <div className="footer" >Copyright &copy; 2022 Tim UG. All rights reserved.</div>

        </div>

    )
}

export default DashboardLayoutv2
