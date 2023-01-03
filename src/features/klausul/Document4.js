import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "../../app/api/axios";
import { saveAs } from 'file-saver'
import { Card } from "antd";


const DATA_URL = '/document4'

const Document4 = () => {


    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("")
    const [price1, setPrice1] = useState("")
    const [price2, setPrice2] = useState("")

    const [subSatu, setSubSatu] = useState("")
    const [subDua, setSubDua] = useState("")
    const [subTiga, setSubTiga] = useState("")
    const [subEmpat, setSubEmpat] = useState("")


    const [errMsg, setErrMsg] = useState("");


    const navigate = useNavigate();
    const location = useLocation();
    const [documents, setDocuments] = useState();

    let isMounted = true;
    const controller = new AbortController();

    const getDokumen = async () => {
        try {
            const response = await axios.get('/document4', {
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
            navigate('/klausul4', { state: { from: location }, replace: true });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(
                DATA_URL,
                JSON.stringify({ name, receiptId, price1, price2, subSatu, subDua, subTiga, subEmpat }),//data.img baseFile

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
                        <h2>Klausul 4</h2>
                        <br />
                        <br />
                        <h1>Konteks dari Organisasi</h1>
                        <br />
                        <p>
                            <b>4.1</b> Understanding the organization
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subSatu"
                                    className="form-control"
                                    placeholder="Input 4.1"
                                    id="subSatu"
                                    onChange={(e) => setSubSatu(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <b>4.2</b> Understanding the needs and expectations of interested parties
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subDua"
                                    placeholder="Input 4.2"
                                    className="form-control"
                                    id="subDua"
                                    onChange={(e) => setSubDua(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <b>4.3</b> Determining the scope of energy management system
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subTiga"
                                    placeholder="Input 4.3"
                                    className="form-control"
                                    id="subTiga"
                                    onChange={(e) => setSubTiga(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <b>4.4</b> Energy management System
                            <div className="input-field input-dokumen">
                                <div className="">
                                    <FontAwesomeIcon icon={faListNumeric} className='icon' />
                                </div>
                                <input
                                    type="text"
                                    name="subEmpat"
                                    placeholder="Input 4.4"
                                    className="form-control"
                                    id="subEmpat"
                                    onChange={(e) => setSubEmpat(e.target.value)}
                                    required
                                />
                            </div>


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

export default Document4