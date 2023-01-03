
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "../../app/api/axios";
import { saveAs } from 'file-saver'
import { Card } from "antd";



const DATA_URL = '/document8'

const Document8 = () => {
    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("")
    const [price1, setPrice1] = useState("")
    const [price2, setPrice2] = useState("")

    const [subSatu, setSubSatu] = useState("")
    const [subDua, setSubDua] = useState("")
    const [subTiga, setSubTiga] = useState("")

    const [errMsg, setErrMsg] = useState("");


    const navigate = useNavigate();
    const location = useLocation();
    const [documents, setDocuments] = useState();

    let isMounted = true;
    const controller = new AbortController();

    const getDokumen = async () => {
        try {
            const response = await axios.get('/document8', {
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
            navigate('/klausul8', { state: { from: location }, replace: true });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(
                DATA_URL,
                JSON.stringify({ name, receiptId, price1, price2, subSatu, subDua, subTiga }),//data.img baseFile

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

            <div className="main">
                <div className="details" id="klausul1">
                    {/* detail list */}

                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Klausul 8</h2>
                        <br />
                        <br />
                        <h1>8.	Operation</h1>
                        <br />
                        <p>
                            <b>8.1</b> Perencanaan dan pengendalian operasional
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subSatu"
                                    className="form-control"
                                    placeholder="Input 8.1"
                                    id="subSatu"
                                    onChange={(e) => setSubSatu(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <b>8.2</b> Desain
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subDua"
                                    placeholder="Input 8.2"
                                    className="form-control"
                                    id="subDua"
                                    onChange={(e) => setSubDua(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <b>8.3</b> Pengadaan
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subTiga"
                                    placeholder="Input 8.3"
                                    className="form-control"
                                    id="subTiga"
                                    onChange={(e) => setSubTiga(e.target.value)}
                                    required
                                />
                            </div>
                            <br />

                        </p>

                    </Card>
                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Operation</h2>
                        <div className="form-container">
                            <div className="form-input">

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

                            </div>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Document8