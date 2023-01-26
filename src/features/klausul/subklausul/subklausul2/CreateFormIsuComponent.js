import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button, Form, Input, Select, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from '../../../../app/api/axios';
import { useNavigate } from 'react-router-dom';
import { useAddNewFormisuMutation } from '../../../formisu/formisusApiSlice';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';


const { Option } = Select;
const { TextArea } = Input;

const CreateFormIsuComponent = () => {

    const { userId } = useAuth()

    const [addNewFormisu, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewFormisuMutation()

    const [deskripsi, setDeskripsi] = useState('')
    const [jenisisu, setJenisisu] = useState('')
    const [urgensiisu, setUrgensiisu] = useState('')
    const [kegiatanOperasi, setKegiatanOperasi] = useState('')
    const [lokasiSektor, setLokasiSektor] = useState('')
    const [modelbisnis, setModelbisnis] = useState('')
    const [ukuranStrukturWewenang, setUkuranStrukturWewenang] = useState('')

    const templateFormIsu = async (e) => {
        e.preventDefault();

        try {
            axios({
                url: '/templates/formisu',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Form_Isu.xlsx');
                document.body.appendChild(link);
                link.click();
            });


            // const response = await axios.get(
            //     DOWNLOAD_URL,
            //     { responseType: "blob" }
            // ).then((res) => {
            //     const url = window.URL.createObjectURL(new Blob([res.data]));
            //     const link = document.createElement('a');
            //     link.href = url;
            //     link.setAttribute('download', 'file.pdf');
            //     document.body.appendChild(link);
            //     link.click();
            // })
        } catch (err) {

        }

    }


    const onFinishFormIsu = async (values) => {

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    await addNewFormisu({ user: userId, deskripsi: values.deskripsi, jenisisu: values.jenisisu, urgensiisu: values.urgensiisu, kegiatanOperasi: values.kegiatanOperasi, lokasiSektor: values.lokasiSektor, modelbisnis: values.modelbisnis, ukuranStrukturWewenang: values.ukuranStrukturWewenang })
                    Swal.fire('Saved!', '', 'success')
                } catch (err) {
                    console.log(err);
                }

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

        try {

            console.log(values);

            await addNewFormisu({ user: userId, deskripsi: values.deskripsi, jenisisu: values.jenisisu, urgensiisu: values.urgensiisu, kegiatanOperasi: values.kegiatanOperasi, lokasiSektor: values.lokasiSektor, modelbisnis: values.modelbisnis, ukuranStrukturWewenang: values.ukuranStrukturWewenang })

        } catch (error) {
            console.log(error);
        }
    }
    const handleSelect = (value) => {
        console.log(value);
    };

    const navigate = useNavigate()
    useEffect(() => {

        if (isSuccess) {
            setDeskripsi('')
            setJenisisu('')
            setUrgensiisu('')
            setKegiatanOperasi('')
            setLokasiSektor('')
            setModelbisnis('')
            setUkuranStrukturWewenang('')
            navigate('/dashboard')
        }

    }, [isSuccess, navigate])


    return (
        <>
            <h1>Form Isu Eksternal dan Internal </h1>
            <br />

            <Form layout="vertical" onFinish={onFinishFormIsu} style={{ width: '100%' }} className="klausul" name='formisu' >
                <Row align="start">
                    <Col >
                        <Form.Item
                            name='jenisisu'
                            label='Jenis Isu'
                            // initialValue={formisu.jenisisu}
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
                    <Col >
                        <Form.Item
                            name='deskripsi'
                            label='Deskripsi Isu(Permasalahan)'
                            rules={[{ required: true }]}

                        >
                            <TextArea />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Item
                            name='urgensiisu'
                            label='urgensi isu'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Jenis ISU!',
                                }
                            ]}
                        >

                            <Select placeholder="pilih urgensi isu" onChange={handleSelect}>
                                <Option value="opt1">relevan dengan Tujuan EnMS dan Kinerja Energi</Option>
                                <Option value="opt2">mempengaruhi kemampuan mencapai hasil EnMS dan Kinerja Energi</Option>
                            </Select>


                        </Form.Item>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Item
                            name={jenisisu}
                        >
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
                        <Form.Item
                            name='ukuranStrukturWewenang'
                            label='Ukuran, Struktur, dan Wewenang '
                            rules={[{ required: true }]}


                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name='lokasiSektor' label='Lokasi dan Sektor' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col >
                        <Form.Item name='kegiatanOperasi' label='kegiatan dan operasi' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Form.Item name='modelbisnis' label='Model Bisnis' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>


                <Space direction="vertical">
                    <Space wrap>
                        <Button htmlType='submit' className='save'>Save</Button>
                        <Button className="btnsbmt" onClick={templateFormIsu} type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                            Template
                        </Button>
                    </Space>
                </Space>


            </Form>


        </ >
    )
}

export default CreateFormIsuComponent