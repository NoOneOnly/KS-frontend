
import React from 'react'
import './Dashboard.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerticalChart from './VerticalChart';
import PolarAreaChart from './PolarAreaChart';
import { NavLink, useNavigate } from 'react-router-dom';
import { faLayerGroup, faUser, faRightFromBracket, faGears } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useSendLogoutMutation } from '../auth/authApiSlice';



const Dashboard = () => {

    const navigate = useNavigate();

    const [sendLogout] = useSendLogoutMutation()

    const signOut = async () => {

        Swal.fire({
            title: 'Logout!',
            text: 'Apakah anda yakin ingin keluar',
            icon: 'info',
            confirmButtonText: 'Yes',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                sendLogout();
                navigate("/login");
                Swal.fire('Logout Berhasil!', '', 'success')
            }
        })


    };



    return (
        <>


            <div className="main">


                {/* cards */}
                <div className="cardBox">
                    <NavLink to='/userslists'>
                        <div className="card">
                            <div>
                                <div className="numbers">Daftar</div>
                                <div className="cardName">Pengguna</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to='/klausul8'>
                        <div className="card">
                            <div>
                                <div className="numbers">Klausul 8</div>
                                <div className="cardName">Dokumen</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faGears} />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/klausul9'>
                        <div className="card">
                            <div>
                                <div className="numbers">Klausul 9</div>
                                <div className="cardName">Dokumen</div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faLayerGroup} />
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='' onClick={signOut}>
                        <div className="card">
                            <div>
                                <div className="numbers">Logout</div>
                                <div className="cardName"></div>
                            </div>
                            <div className="iconBx">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                        </div>
                    </NavLink>
                </div>

                {/* Charts */}
                <div className="graphBox">
                    <div className="box"><PolarAreaChart /></div>
                    <div className="box"><VerticalChart /></div>
                </div>






            </div>

            <div className="footer">Copyright &copy; 2022 Tim UG. All rights reserved.</div>


        </>
    )
}

export default Dashboard