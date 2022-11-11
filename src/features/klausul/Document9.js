import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "../../app/api/axios";
import { saveAs } from 'file-saver'

const DATA_URL = '/document9'

const Document9 = () => {

    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("")
    const [price1, setPrice1] = useState("")
    const [price2, setPrice2] = useState("")

    const [errMsg, setErrMsg] = useState("");


    const navigate = useNavigate();
    const location = useLocation();
    const [documents, setDocuments] = useState();

    let isMounted = true;
    const controller = new AbortController();

    const getDokumen = async () => {
        try {
            const response = await axios.get('/document9', {
                signal: controller.signal
            }).then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' }); //type: "text/plain;charset=utf-8"} { type: 'application/pdf' }
                saveAs(pdfBlob, 'newPdf.pdf')
                console.log(pdfBlob);
            })
            console.log(response.data);
            isMounted && setDocuments(response.data);
        } catch (err) {
            console.error(err);
            navigate('/klausul9', { state: { from: location }, replace: true });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(
                DATA_URL,
                JSON.stringify({ name, receiptId, price1, price2 }),//data.img baseFile

                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true,
                }
            ).then(getDokumen)


        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Input data Failed");
            }
            console.log(err);
            // errRef.current.focus();
        }



    };




    return (
        <>
            <Topbar />
            <div className="main">
                <div className="details">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Klausul 9</h2>
                        </div>
                        <h1>Evaluasi Kinerja</h1>
                        <p>
                            <b>9.1</b> Pemantauan, pengukuran, analisis dan evaluasi kinerja energi dan EnMS <br />
                            <b>9.2</b> Audit internal <br />
                            <b>9.3</b> Tinjauan manajemen <br />

                        </p>
                    </div>

                    {/* New Customer */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Performance Evaluation (Evaluasi Kinerja)</h2>
                        </div>
                        <table>
                            Under Construction
                        </table>

                    </div>
                </div>

                <div className="details details-dokumen">
                    {/* detail list */}
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Halaman Klausul 9</h2>
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
                                        <button onClick={handleSubmit} className="btn klausul">
                                            Create PDF
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="recentCustomers">
                        <img src="img/klausul9.svg" className="image" alt="" />
                    </div>
                </div>

            </div>
            <Sidebar />
        </>
    )
}

export default Document9