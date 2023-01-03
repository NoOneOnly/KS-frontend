import Sidebar from "../dashboard/Sidebar"
import Topbar from "../dashboard/Topbar"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import { Card, Upload, message } from "antd";
import fotoProfile from "../../images/default.svg"
import { useGetUsersQuery } from '../users/usersApiSlice'







const Document1 = () => {

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })



    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,

        data: {
            'key': 'value' // masukin data userid dari sini ygy
        },


        action: 'http://localhost:4500/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };









    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("")
    const [price1, setPrice1] = useState("")
    const [price2, setPrice2] = useState("")

    return (
        <>

            <div className="main">
                <div className="details" id="klausul1">
                    {/* detail list */}
                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Klausul 1</h2>
                        Dokumen ini menetapkan persyaratan untuk menetapkan, menerapkan, memelihara, dan meningkatkan sistem manajemen energi (EnMS). Hasil yang diinginkan adalah memungkinkan organisasi untuk mengikuti pendekatan sistematis dalam mencapai peningkatan berkelanjutan kinerja energi dan EnMS.
                    </Card>
                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Scope (Ruang Lingkup)</h2>
                        <p>Dokumen ini menetapkan persyaratan untuk menetapkan, menerapkan, memelihara, dan meningkatkan sistem manajemen energi (EnMS). Hasil yang diinginkan adalah memungkinkan organisasi untuk mengikuti pendekatan sistematis dalam mencapai peningkatan berkelanjutan kinerja energi dan EnMS.
                        </p>
                    </Card>
                </div>


                {/* New Customer */}


                <div className="details details-dokumen" id="klausul1">
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

                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Upload files</h2>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Document1