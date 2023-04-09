import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDokumens, dokumenSelector, deleteDokumen, downloadDokumenById } from '../dokumens/dokumenApiSlice'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Button, Table } from 'antd'
import Swal from 'sweetalert2'

const ShowDokumens = () => {


    const { username, userId, docs } = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const dokumens = useSelector(dokumenSelector.selectAll)

    const [documents, setDocuments] = useState(docs)

    // const id = userId

    // const dokumen = useSelector((state) => dokumenSelector.selectById(state, id))

    const handleDelete = (key) => {


        Swal.fire({
            title: 'Logout!',
            text: `Apakah anda yakin ingin menghapus ${key}`,
            icon: 'info',
            confirmButtonText: 'Yes',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(deleteDokumen(key))
                await Swal.fire(`${key} berhasil dihapus`, '', 'success')

                window.location.reload();


            }
        })




        // alert(`Are you sure you want to delete ${key}?`)
        // const newDocuments = documents.filter((item) => item.key !== key);
        // setDocuments(newDocuments);

    }

    const handleDownload = (key) => {
        dispatch(downloadDokumenById(key))
    }

    useEffect(() => {

        setDocuments(docs)

    }, [dispatch])


    // useEffect(() => {
    //     dispatch(getDokumens())
    // }, [dispatch])

    return (
        <>
            <Table
                columns={[
                    {
                        title: "No",
                        dataIndex: "No",
                        render: (text, record, index) => index + 1,
                    },
                    {
                        title: "Dokumen",
                        dataIndex: "docname"
                    },

                    {
                        title: "Updated",
                        dataIndex: "updatedAt"
                    },

                    {
                        title: "action",
                        dataIndex: "_id",
                        key: "action",
                        render: (text) =>
                            <>
                                <Button type="primary" style={{ color: '#fff', background: '#5b8c00' }} onClick={() => handleDownload(text)}>Download</Button>
                                <Button type="primary" danger onClick={() => handleDelete(text)}>Hapus</Button>
                            </>,
                    },
                ]}
                dataSource={documents}
                rowKey={(record, index) => index}
            >

            </Table>

        </>
    )
}

export default ShowDokumens