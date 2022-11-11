import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Document10 = () => {
    return (
        <>
            <Topbar />
            <div className="main">

                {/* cards */}
                <div className="cardBox" id='profile'>

                    <NavLink exact to='/dashboard'>
                        <div className="card" >
                            <div>
                                <div className="numbers">Dashboard</div>
                                <div className="cardName">Kembali ke dashboard</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                        </div>
                    </NavLink>
                </div>



                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Akun User</h2>

                        </div>
                        <table >
                            <thead>
                                <tr>
                                    <td>Nama User</td>
                                    <td>Roles</td>
                                    <td>Aksi</td>
                                </tr>
                            </thead>
                            <tbody>



                            </tbody>
                        </table>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Daftar Anggota</h2>
                        </div>
                        <table>

                        </table>

                    </div>
                </div>

            </div>
            <Sidebar />
        </>
    )
}

export default Document10