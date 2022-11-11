import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Document7 = () => {
    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 7</h2>
                        </div>
                        <h1>Dukungan</h1>
                        <p>
                            <b>7.1</b> Actions to address risks and opportunities <br />
                            <b>7.2</b> Objectives, energy targets and planning to achieve them <br />
                            <b>7.3</b> Energy review <br />
                            <b>7.4</b> Energy performance indicators <br />
                            <b>7.5</b> Energy baseline <br />
                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Support (Dukungan)</h2>
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

export default Document7