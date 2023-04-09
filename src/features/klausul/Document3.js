import React, { useState } from 'react';
import { Col, Row, Card, Button, Form, Input, Select, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const Document3 = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    const { userId } = useAuth();

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    const onFinish = async (values) => {

        try {
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    }

    const tabList = [
        {
            key: 'tab1',
            tab: 'Form Kebijakan Energi',
        },
        {
            key: 'tab2',
            tab: 'Form deskripsi spesifikasi pekerjaan tim manajemen energi',
        },
        {
            key: 'tab3',
            tab: 'Form struktur organisasi dan tim manajemen energi'
        }
    ];

    const { Option } = Select;
    const { TextArea } = Input;

    const handleSelect = (value) => {
        console.log(`selected ${value}`);
        setPilihan(value);
    };

    const [pilihan, setPilihan] = useState('')

    const contentList = {

        tab1:
            <p>
                <h1>Form Kebijakan Energi </h1>
                <br />

            </p >,
        tab2:
            <p>
                <h1>Form deskripsi spesifikasi pekerjaan tim manajemen energi </h1>
                <br />
                <Form layout="vertical" onFinish={onFinish} style={{ width: '100%' }} className="klausul">
                    <Row align="start">
                        <Col >
                            <Form.Item
                                name='jenisisu'
                                label='Jenis Isu'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select Jenis ISU!',
                                    },
                                ]}
                            >

                                <Select placeholder="pilih jenis isu" onChange={handleSelect} >
                                    <Option value="eksternal">Eksternal</Option>
                                    <Option value="internal">Internal</Option>
                                </Select>

                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Item name='namaPT' label='Nama Interested parties' rules={[{ required: true }]}>
                                <Input
                                    style={{
                                        width: '500px',
                                    }}

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Item name='identitas' label='Identitas Interested parties' rules={[{ required: true }]}>
                                <Input
                                    style={{
                                        width: '100%',
                                    }}

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Item name='alamat' label='Alamat Interested parties' rules={[{ required: true }]}>
                                <TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Form.Item name='deskripsi' label='Deskripsi Persyaratan/Kebutuhan/Harapan interested parties' rules={[{ required: true }]}>
                                <TextArea />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Button htmlType='submit' className='save'>Save</Button>


                </Form>
            </p >,
        tab3: <p>
            <h1>Form Struktur organisasi energi </h1>
            <br />

        </p >,
    };





    const { Dragger } = Upload;
    const props = {
        name: 'file',
        // multiple: true,

        data: {
            'user': userId, // masukin data userid dari sini ygy
            'namafile': 'klausul3',
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
            <div className="main" style={{ 'left': "110px" }}>

                <Row>
                    <Col span={15}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            title="Klausul 3 Kepemimpinan"

                            tabList={tabList}
                            activeTabKey={activeTabKey1}
                            onTabChange={(key) => {
                                onTab1Change(key);
                            }}
                        >
                            {contentList[activeTabKey1]}
                        </Card>
                    </Col>

                    <Col span={8} style={{ marginLeft: 15 }}>
                        <Card
                            hoverable
                        >
                            <h2>Upload Klausul 3</h2>
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
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Document3