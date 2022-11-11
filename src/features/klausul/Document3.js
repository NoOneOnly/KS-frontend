import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Document3 = () => {
    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 3</h2>
                        </div>
                        <h1>Istilah dan Definisi</h1>
                        <p>
                            <b>3.1</b> Terms related to organization <br />
                            <b>3.2</b> Terms related to management system <br />
                            <b>3.3</b> Terms related to requirement <br />
                            <b>3.4</b> Terms related to performance <br />
                            <b>3.5</b> Terms related to energy <br />
                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Terms and definitions (Istilah dan Definisi) </h2>
                        </div>
                        <table>
                            Under Construction
                        </table>

                    </div>
                </div>

            </div>
            <Sidebar />
        </>
    )
}

export default Document3