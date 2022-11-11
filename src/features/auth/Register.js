import { useRef, useState, useEffect } from "react";
import {
    faUser,
    faLock,
    faCheck,
    faTimes,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../app/api/axios";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle'


// import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/users";

const Register = () => {
    useTitle('SPD ISO 50001')



    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

    const [setModeHandle] = useState('');

    const handleModeSignUp = () => {
        const container = document.querySelector(".container");

        setModeHandle(container.classList.remove("sign-up-mode"))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const username = user
            const password = pwd
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setUser("");
            setPwd("");
            setMatchPwd("");

            await Swal.fire({
                icon: 'success',
                title: 'Great!',
                text: 'Register berhasil!'
            })
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No Server Response!'
                })
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username Taken!'
                })
            } else {
                setErrMsg("Registration Failed");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registration Failed!'
                })
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h2 className="title">Register</h2>

                <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        placeholder="Username"
                    />
                    <div className="icalert">
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={validName ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={validName || !user ? "hide" : "invalid"}
                        />
                    </div>
                </div>
                <p
                    id="uidnote"
                    className={
                        userFocus && user && !validName ? "instructions" : "offscreen"
                    }
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters. Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        placeholder="Password"
                    />
                    <div className="icalert">
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={validPwd ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={validPwd || !pwd ? "hide" : "invalid"}
                        />
                    </div>
                </div>
                <p
                    id="pwdnote"
                    className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <small>
                        {" "}
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number and a special
                        character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                    </small>
                </p>

                <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        placeholder="Confirm Password"
                    />
                    <div className="icalert">
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={validMatch && matchPwd ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={validMatch || !matchPwd ? "hide" : "invalid"}
                        />
                    </div>
                </div>
                <p
                    id="confirmnote"
                    className={matchFocus && !validMatch ? "instructions" : "offscreen"}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>
                <button
                    disabled={!validName || !validPwd || !validMatch ? true : false}
                    className="btn"
                >
                    Daftar
                </button>
            </form>
        </>
    );
};

export default Register;
