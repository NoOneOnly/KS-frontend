import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Document6 = () => {
    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 6</h2>
                        </div>
                        <h1>Perencanaan</h1>
                        <p>
                            <b>6.1</b> Actions to address risks and opportunities <br />
                            <b>6.2</b> Objectives, energy targets and planning to achieve them <br />
                            <b>6.3</b> Energy review <br />
                            <b>6.4</b> Energy performance indicators <br />
                            <b>6.5</b> Energy baseline <br />
                            <b>6.6</b> Planning for collection of energy data <br />
                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Planning (Perencanaan)</h2>
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

export default Document6