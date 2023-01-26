import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNoteSticky, faListNumeric } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "../../app/api/axios";
import { saveAs } from 'file-saver'
import { Col, Row, Card, Button, Form, Input, Select, Radio, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';

import "./Document4.css"


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

    const formPenilaian = async (e) => {
        e.preventDefault();
        try {
            axios({
                url: '/templates/formpenilaian',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Penilaian.xlsx');
                document.body.appendChild(link);
                link.click();
            });
        } catch (err) {
            console.log(err);
        }

    }
    const formKriteria = async (e) => {
        e.preventDefault();
        try {
            axios({
                url: '/templates/formkriteria',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Kriteria.xlsx');
                document.body.appendChild(link);
                link.click();
            });
        } catch (err) {
            console.log(err);
        }

    }
    const formPenggunaanEnergi = async (e) => {
        e.preventDefault();
        try {
            axios({
                url: '/templates/formpenggunaan',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Pengunaan energi.xlsx');
                document.body.appendChild(link);
                link.click();
            });
        } catch (err) {
            console.log(err);
        }

    }
    const formPerencanaanPengumpulan = async (e) => {
        e.preventDefault();
        try {
            axios({
                url: '/templates/formperencanaan',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Perencenaan_Pengumpulan_data_energi.xlsx');
                document.body.appendChild(link);
                link.click();
            });
        } catch (err) {
            console.log(err);
        }
    }
    const formJenisdanAplikasiEnpi = async (e) => {
        e.preventDefault();
        try {
            axios({
                url: '/templates/formjenisaplikasienpi',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Jenis dan Aplikasi Enpi.xlsx');
                document.body.appendChild(link);
                link.click();
            });
        } catch (err) {
            console.log(err);
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
            tab: 'Form kriteria risiko energi',
        },
        {
            key: 'tab2',
            tab: 'Form penilaian risiko energi',
        },
        {
            key: 'tab3',
            tab: 'Form tujuan, target, dan rencana tindakan'
        },
        {
            key: 'tab4',
            tab: 'Form tinjauan energi_format rinci'
        },
        {
            key: 'tab5',
            tab: 'Form tinjauan energi_format garis besar'
        },
        {
            key: 'tab6',
            tab: 'Form penggunaan energi signifikan SEU'
        },
        {
            key: 'tab7',
            tab: 'Form perencanaan pengumpulan data energi'
        },
        {
            key: 'tab8',
            tab: 'Form jenis dan aplikasi EnPI_contoh'
        },
        {
            key: 'tab9',
            tab: 'Form penggunaan dan tujuan EnPI_contoh'
        },
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
                <h1>Form kriteria risiko energi </h1>
                <br />
                <Form layout="vertical" onFinish={onFinish} style={{ width: '100%' }} className="klausul">
                    <Col >
                        <Form.List name="education">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <>
                                            <Row>

                                                <Col >

                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'aspekResiko']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing Aspek Resiko Energi',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            style={{
                                                                width: '500px',
                                                            }}
                                                            placeholder="Aspek Resiko Energi" />
                                                    </Form.Item>
                                                </Col>


                                                <Col offset={1}>

                                                    <Form.Item
                                                        {...restField}

                                                        name={[name, 'radio']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Missing radio',
                                                            },
                                                        ]}
                                                    >
                                                        <Radio.Group>
                                                            <Radio value="jarang"> Jarang </Radio>
                                                            <Radio value="kecilKemungkinan"> Kecil Kemungkinan </Radio>
                                                            <Radio value="mungkin"> Mungkin </Radio>
                                                            <Radio value="terjadi">Cenderung Terjadi </Radio>
                                                            <Radio value="selalu"> Selalu Terjadi </Radio>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </Col>



                                                <Col offset={1}>
                                                    <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
                                                </Col>






                                            </Row>
                                        </>
                                    ))}


                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Tambah Resiko Energi
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Col>
                    <Space direction="vertical">
                        <Space wrap>
                            <Button htmlType='submit' className='save'>Save</Button>
                            <Button className="btnsbmt" onClick={formKriteria} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                                Template
                            </Button>
                        </Space>
                    </Space>
                </Form>

            </p >,
        tab2:
            <p>
                <h1>Form penilaian risiko energi </h1>
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

                    <Space direction="vertical">
                        <Space wrap>
                            <Button htmlType='submit' className='save'>Save</Button>
                            <Button className="btnsbmt" onClick={formPenilaian} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                                Template
                            </Button>
                        </Space>
                    </Space>
                </Form>
            </p >,
        tab3: <p>
            <h1>Form Struktur organisasi energi </h1>
            <br />

        </p >,
        tab4: <p>
            <h1>Form tinjauan energi format rinci </h1>
            <br />

        </p >,
        tab5: <p>
            <h1>Form tinjauan energi format garis besar </h1>
            <br />

        </p >,
        tab6: <p>
            <h1>Form penggunaan energi signifikan SEU </h1>
            <br />


            <Space direction="vertical">
                <Space wrap>
                    <Button htmlType='submit' className='save'>Save</Button>
                    <Button className="btnsbmt" onClick={formPenggunaanEnergi} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                        Template
                    </Button>
                </Space>
            </Space>

        </p >,
        tab7: <p>
            <h1>Form Perencanaan Pengumpulan data energi </h1>
            <br />


            <Space direction="vertical">
                <Space wrap>
                    <Button htmlType='submit' className='save'>Save</Button>
                    <Button className="btnsbmt" onClick={formPerencanaanPengumpulan} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                        Template
                    </Button>
                </Space>
            </Space>

        </p >,
        tab8: <p>
            <h1>Form Jenis dan Aplikasi Enpi </h1>
            <br />


            <Space direction="vertical">
                <Space wrap>
                    <Button htmlType='submit' className='save'>Save</Button>
                    <Button className="btnsbmt" onClick={formJenisdanAplikasiEnpi} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                        Template
                    </Button>
                </Space>
            </Space>

        </p >,



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
                <div className="details" id="klausul4">
                    <Row>
                        <Col span={24} >
                            <Card
                                hoverable
                                style={{
                                    width: '100%',
                                }}
                                title="Klausul 4 Perencanaan"

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
            </div>
        </>
    )
}

export default Document4