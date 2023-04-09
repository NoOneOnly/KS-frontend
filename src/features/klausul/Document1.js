

import { InboxOutlined } from '@ant-design/icons';

// import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from "../../hooks/useAuth";


import { Card, Upload, message, Button, Space } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import ShowDokumens from '../dokumens/ShowDokumens';
import Swal from 'sweetalert2';






const Document1 = () => {

    const { userId, docs } = useAuth()

    // const { users } = useGetUsersQuery("usersList", {
    //     selectFromResult: ({ data }) => ({
    //         users: data?.ids.map(id => data?.entities[id])
    //     }),
    // })



    const { Dragger } = Upload;
    const props = {
        name: 'file',
        // multiple: true,

        data: {
            'user': userId, // masukin data userid dari sini ygy
            'namafile': 'klausul1',
            'ekstension': 'pdf'
        },




        // action: 'https://spdsoftware-api.onrender.com/upload',
        action: 'http://localhost:4500/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                // message.success(`${info.file.name} file uploaded successfully.`);
                Swal.fire({
                    title: 'Upload success',
                    icon: 'success',


                    confirmButtonText: 'OK',

                }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        // await Swal.fire('Saved!', '', 'success')
                        window.location.reload()
                    }
                })
                // window.location.reload();
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };



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

                    <div className="recentCustomers">
                        <img src="img/icon-document.svg" className="image" alt="" />
                    </div>

                    <Card style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>
                        <h2>Upload Klausul 1</h2>
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


                <div className="details" >

                    <Card
                        hoverable
                    >
                        <ShowDokumens />
                    </Card>


                </div>

                <div className="details">

                    <Space direction="vertical">
                        <Space wrap>
                            <Button className="btnsbmt" type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                                Template
                            </Button>
                        </Space>
                    </Space>
                </div>


            </div>

        </>
    )
}

export default Document1