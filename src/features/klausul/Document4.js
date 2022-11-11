import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Document4 = () => {
    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 4</h2>
                        </div>
                        <h1>Konteks dari Organisasi</h1>
                        <p>
                            <b>4.1</b> Understanding the organization <br />
                            <b>4.2</b> Understanding the needs and expectations of interested parties <br />
                            <b>4.3</b> Determining the scope of energy management system <br />
                            <b>4.4</b> Energy management System <br />
                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Context of the organization (Konteks dari Organisasi) </h2>
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

export default Document4