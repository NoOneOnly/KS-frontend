import React, { useState } from 'react';
import { Col, Row, Card, Button, Form, Input, Select } from 'antd';


const Document3 = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');


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

    return (
        <>
            <div className="main" style={{ 'left': "110px" }}>

                <Row>
                    <Col span={21}>
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
                </Row>
            </div>

        </>
    )
}

export default Document3