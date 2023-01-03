import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHouseChimney,
    faEnvelope,
    faRightFromBracket,
    faBook,
    faBookBookmark,
    faUpload,
    faMagnifyingGlass,
    faPen,
    faPeopleRoof,
    faPersonShelter,
    faGears,
    faHandshake,
    faLayerGroup

} from "@fortawesome/free-solid-svg-icons";



import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSendLogoutMutation } from '../auth/authApiSlice'

import Swal from 'sweetalert2';



const Sidebar = () => {
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
                Swal.fire('Logout Berhasil!', '', 'success')
                sendLogout();
                navigate("/login");
            } else {
                navigate("/dashboard");
            }
        })


    };

    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list">
                        <NavLink exact to="logo" activeClassName="active">
                            <b></b>
                            <b></b>

                            <span className="titlesLogo">
                                Penyusunan Dokumen Sistem Manajemen Energi
                            </span>
                            {/* <div className="imgBx">
                <img src="img/LOGO_GUNDAR.png" alt="" />
              </div> */}
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/dashboard" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faHouseChimney} className="icd" />
                            </span>
                            <span className="titles">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/userslists" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faUser} className="icd" />
                            </span>
                            <span className="titles">Akun</span>
                        </NavLink>
                    </li>
                    {/* <li className="list">
            <NavLink exact to="/email" activeClassName="active">
              <b></b>
              <b></b>
              <span className="icon">
                <FontAwesomeIcon icon={faUpload} className="icd" />
              </span>
              <span className="titles">Data</span>
            </NavLink>
          </li> */}
                    <li className="list">
                        <NavLink exact to="/klausul1" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="icd" />
                            </span>
                            <span className="titles">Scope</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul2" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faPen} className="icd" />
                            </span>
                            <span className="titles">Normative</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul3" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faBookBookmark} className="icd" />
                            </span>
                            <span className="titles">Term and Definitions</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul4" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faPeopleRoof} className="icd" />
                            </span>
                            <span className="titles">Organization and Context</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul5" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faPersonShelter} className="icd" />
                            </span>
                            <span className="titles">Leadership</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul6" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faBook} className="icd" />
                            </span>
                            <span className="titles">Planning</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul7" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faHandshake} className="icd" />
                            </span>
                            <span className="titles">Support</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul8" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faGears} className="icd" />
                            </span>
                            <span className="titles">Operation</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/klausul9" activeClassName="active">
                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faLayerGroup} className="icd" />
                            </span>
                            <span className="titles">Performance Evaluation</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <Link
                            exact
                            to=""
                            activeClassName="active"
                            onClick={signOut}
                        >

                            <b></b>
                            <b></b>
                            <span className="icon">
                                <FontAwesomeIcon icon={faRightFromBracket} className="icd" />
                            </span>
                            <span className="titles">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
