import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"

import { React } from 'react';
import { NavLink } from "react-router-dom";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useGetUsersQuery } from "../users/usersApiSlice";
import useTitle from "../../hooks/useTitle";
import User from './User'
import { Button, Card, Form, Tabs } from "antd";
import PersonalInfo from "./PersonalInfo";



const UsersList = () => {
    useTitle('SPD ISO 50001: Users List')

    const {
        data: users
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const { ids } = users

    const tableContent = ids?.length && ids.map(userId => <User key={userId} userId={userId} />)

    const onFinish = () => {

    }

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>


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

                                {tableContent}


                                {/* <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status return">Return</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status return">Return</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status delivered">Delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status inprogres">In Progres</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status delivered">Delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Start refrigrator</td>
                                    <td>$1200</td>
                                    <td>$Paid</td>
                                    <td><span className="status delivered">Delivered</span></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                    {/* New Customer */}
                    {/* <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Daftar Anggota</h2>
                        </div>
                        <table> */}
                    {/*   <li key={i}>{user?.username}</li> */}
                    {/* {users?.length
                                ? (
                                    <>
                                        {
                                            users.map((user, i) =>

                                                <tr>
                                                    <td width="60px"><div className="imgBx"><img src="img/img1.jpg" /></div></td>
                                                    <td key={i}><h4>{user?.username} <br /><span>Active</span></h4></td>
                                                </tr>


                                            )
                                        }
                                    </>
                                ) : <p>No users to display</p>
                            } */}



                    {/* <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img2.jpg" /></div></td>
                                <td><h4>Muhammad <br /><span>India</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img3.jpg" /></div></td>
                                <td><h4>Amelia <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img4.jpg" /></div></td>
                                <td><h4>Olivia <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img5.jpg" /></div></td>
                                <td><h4>Amit <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img6.jpg" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img7.jpg" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="img/img8.jpg" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr> */}
                    {/* </table>

                    </div> */}
                </div>



            </div>



            <div className="footer" >Copyright &copy; 2022 Tim UG. All rights reserved.</div>
        </>
    )
}

export default UsersList