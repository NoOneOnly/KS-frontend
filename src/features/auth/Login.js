import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faQuestion } from "@fortawesome/free-solid-svg-icons"
import LeftPanel from './LeftPanel'
import Register from './Register'
import Swal from 'sweetalert2';
import './Login.css'
import fileDownload from 'js-file-download'
import axios from "../../app/api/axios";

const Login = () => {
    useTitle('SPD ISO 50001')

    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dashboard')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
        } catch (err) {
            if (!err.status) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Server tidak menanggapi coba lagi nanti!'
                })
            } else if (err.status === 400) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Data yang di masukkan kurang lengkap!'
                })
            } else if (err.status === 401) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username atau Password salah!'
                })
            } else {
                setErrMsg(err.data?.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login Gagal!'
                })
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <PulseLoader color={"#FFF"} />



    const Download = async (e) => {
        e.preventDefault();


        try {


            axios({
                url: 'http://localhost:3500/manualbook',
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf');
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


    const content = (
        <section className="container">
            <div className="helpBox">
                <button onClick={Download} className="info"><FontAwesomeIcon icon={faQuestion} className="icon" /></button>
            </div>

            <div className="forms-container">
                <div className="signin-signup">
                    <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2 className="title" id="judul">Aplikasi Penyusunan Dokumen <br /> Sistem Manajemen Energi</h2>

                        <h2 className="title" id="welcome">Selamat Datang!</h2>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className="icon" />

                            <input
                                className="form__input"
                                type="text"
                                id="username"
                                placeholder="Username"
                                ref={userRef}
                                value={username}
                                onChange={handleUserInput}
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className="icon" />
                            <input
                                className="form__input"
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={handlePwdInput}
                                value={password}
                                required
                            />
                        </div>

                        <button className="form__submit-button btn solid">Sign In</button>


                        <label htmlFor="persist" className="form__persist">
                            <input
                                type="checkbox"
                                className="form__checkbox"
                                id="persist"
                                onChange={handleToggle}
                                checked={persist}
                            />
                            Trust This Device
                        </label>
                    </form>
                    <Register />

                </div>
            </div>
            <div className="footer">Copyright &copy; 2022 Tim UG. All rights reserved.</div>
            <LeftPanel />
            {/* <footer>
                <Link to="/">Back to Home</Link>
            </footer> */}
        </section>
    )

    return content
}
export default Login