import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Document5 = () => {
    return (
        <>

            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 5</h2>
                        </div>
                        <h1>Kepemimpinan</h1>
                        <p>
                            <b>5.1</b> Leadership and commitment <br />
                            <b>5.2</b> Energy policy <br />
                            <b>5.3</b> Organization roles, responsibilities and authorities <br />
                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Leadership (Kepemimpinan)</h2>
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

export default Document5