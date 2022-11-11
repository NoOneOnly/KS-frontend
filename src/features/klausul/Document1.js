import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const Document1 = () => {

    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("")
    const [price1, setPrice1] = useState("")
    const [price2, setPrice2] = useState("")

    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 1</h2>
                        </div>
                        Dokumen ini menetapkan persyaratan untuk menetapkan, menerapkan, memelihara, dan meningkatkan sistem manajemen energi (EnMS). Hasil yang diinginkan adalah memungkinkan organisasi untuk mengikuti pendekatan sistematis dalam mencapai peningkatan berkelanjutan kinerja energi dan EnMS.
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Scope (Ruang Lingkup) </h2>
                        </div>

                        <p>Dokumen ini menetapkan persyaratan untuk menetapkan, menerapkan, memelihara, dan meningkatkan sistem manajemen energi (EnMS). Hasil yang diinginkan adalah memungkinkan organisasi untuk mengikuti pendekatan sistematis dalam mencapai peningkatan berkelanjutan kinerja energi dan EnMS.
                        </p>

                    </div>
                </div>
                <div className="details details-dokumen">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Halaman Klausul 1</h2>
                        </div>
                        <div className="form-container">
                            <div className="form-input">
                                <form className='dokumen'>
                                    <div className="">

                                        <div className="input-field input-dokumen">
                                            <div className="">
                                                <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Nama Perusahaan"
                                                id="name"
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="">

                                        <div className="input-field input-dokumen">
                                            <div className="">
                                                <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                            </div>
                                            <input
                                                type="number"
                                                name="receiptId"
                                                placeholder="No Rev"
                                                className="form-control"
                                                id="receiptId"
                                                onChange={(e) => setReceiptId(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">

                                        <div className="input-field input-dokumen">
                                            <div className="">
                                                <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                            </div>
                                            <input
                                                type="number"
                                                name="price1"
                                                placeholder="No Dok"
                                                className="form-control"
                                                id="price1"
                                                onChange={(e) => setPrice1(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="input-field input-dokumen">
                                            <div className="">
                                                <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                            </div>
                                            <input
                                                type="number"
                                                name="price2"
                                                placeholder="Hal"
                                                className="form-control"
                                                id="price2"
                                                onChange={(e) => setPrice2(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="">

                                        <div className="">

                                        </div>
                                    </div>





                                    <div className="btn-container">


                                        <button className="btn klausul">
                                            Create PDF
                                        </button>



                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="recentCustomers">
                        <img src="img/icon-document.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    )
}

export default Document1