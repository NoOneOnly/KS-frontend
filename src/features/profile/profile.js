import React, { useEffect, useState } from 'react'
import useTitle from "../../hooks/useTitle";

import { Button, Card, Form, Input, Avatar, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';
import './profile.css'
import { useUpdateUserMutation } from '../users/usersApiSlice';


const { Meta } = Card;


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const deleteIconStyles = {
    fontSize: '20px',
    color: 'red',
    ':hover': {
        color: 'blue'
    }
};


const Profile = () => {



    const { username, status, userId, pwd, active, email } = useAuth()

    // const password = pwd




    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    // const onSaveUserClicked = async (e) => {
    //     if (password) {
    //         await updateUser({ id: user.id, username, password, roles, active })
    //     } else {
    //         await updateUser({ id: user.id, username, roles, active })
    //     }
    // }

    const onFinish = async (values) => {
        // console.log(values);
        // console.log(status);
        const arrayStatus = status.split(" ");
        // console.log(typeof arrayStatus);


        if (values.password) {
            await updateUser({ id: values.userId, username: values.username, password: values.password, roles: arrayStatus, active: values.active, email: values.email })
        } else {
            await updateUser({ id: values.userId, username: values.username, roles: arrayStatus, active: values.active, email: values.email })
        }


    };


    console.log(active);



    useTitle('SPD ISO 50001: Profiles')
    return (
        <>
            <div className="main">
                <div className="details" id="edituser">
                    {/* detail list */}
                    <Card hoverable style={{ boxShadow: "0 7px 25px rgb(0 0 0 / 8%)", borderRadius: 20 }}>


                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            id='profile'
                        >
                            <Form.Item
                                name="userId"
                                initialValue={userId}
                                rules={[{ required: true, message: 'Please input your id!' }]}
                                style={{ display: 'none' }}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Username"
                                name="username"
                                initialValue={username}
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                initialValue={email}
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                initialValue={pwd}
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="active" valuePropName="checked" initialValue={active} style={{ display: "none" }} wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Active</Checkbox>
                            </Form.Item>



                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className='btnsbmt'>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>


                    <Card
                        hoverable
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined className="deleteIcon" style={deleteIconStyles} key="delete" onClick={() => { }} />,

                        ]}
                    >
                        <Meta
                            className="cardMeta"
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={username}
                            description={status}
                        />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Profile