import React, { useState } from 'react'
import "./startapplication.scss"
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';

const Startapplication = () => {

    const history = useHistory();

    const [toggle, settoggle] = useState(false);
    const [passwordError, setPasswordError] = useState({});
    const [emailError, setEmailError] = useState({});

    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [inputType, setInputType] = useState(false);

    const [loginres, setLoginnRes] = useState({
        dataURL: '',
        secretKey: '',
    })
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const { email, password } = inputs;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const formValidation = () => {
        const emailError = {};
        const passwordError = {};

        let isValid = true;


        if (email === '') {
            emailError.emailError = "Email is Required";
            isValid = false;
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            emailError.emailNameError = "Invalid Email";
            isValid = false;
        }
        if (password === '') {
            passwordError.logoError = "Password is Required";
            isValid = false;
        }

        // if(messageInputData.)
        setEmailError(emailError)
        setPasswordError(passwordError)
        return isValid;
    }

    const signinHandle = (e) => {
        e.preventDefault();
        formValidation();
        if (email && password) {
            setOpen(true)
            // axios.post("http://192.168.20.79:4000/admin/user/loginadmin", { email, password })
            axios.post(Environment.backendUrl + "/user/loginadmin", { email, password })
                .then((response) => {
                    setLoginnRes(response?.data)
                    const token = response?.data?.token
                    const role = response?.data?.role?.role_name
                    const roleId = response?.data?.role?.id
                    const Acls = response?.data?.role?.Acls
                    let obj = {}
                    let a1 = Acls?.map((e, i) => {
                        console?.log("eeeee", e)
                        obj[`${e?.selection}`] = { ...e };
                        // obj2[`${e.selection}`] = e.id
                    })
                    localStorage.setItem('mytoken', token)
                    localStorage.setItem('myrole', role)
                    localStorage.setItem('myroleId', roleId)
                    localStorage.setItem('acls', JSON.stringify(obj))
                    setOpen(false)
                    history.push('/yourproject/applications');
                    // window.$('#qrcode').modal('show')

                }).catch((err) => {
                    // console.log("response in login", err.response?.data.doesSecretKeyFound)
                    // window.$('#onlyinput').modal('show')
                    setOpen(false)
                    swal("Invalid Credentials!!!", `Password must contain a Capital Letter, Small Letter, Number and a special Character(Minimun 8 characters)`, "error",)
                    toast.error(err.response?.data.msg, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                })
        } else {
            swal("Invalid Credentials!", `Try Again`, "Error",)
        }
    }

    return (
        <>
            <section className='startapplication'>
                <div className="custom-container">
                    <div className='parentstart'>
                        <div className='mainlog'>
                            <img src='\assets\id.png' alt='img' className='img-fluid' />
                        </div>
                        {toggle ?
                            <>

                                <div className='applicationcard'>
                                    <div className='mainheads'>
                                        <h2>Start Application</h2>
                                        <p>Blockchain project applications ONLY</p>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Your Name" type="text" />
                                            <label>Name</label>
                                        </div>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Your Email" type="text" />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Your telegram Handle" type="text" />
                                            <label>Telegram</label>
                                        </div>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Your telegram Handle" type="text" />
                                            <label>Password</label>
                                        </div>
                                        <img src='\assets\eye.png' alt='img' className='img-fluid eye' />
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Enter Password" type="text" />
                                            <label>Confirm Password</label>
                                        </div>
                                        <img src='\assets\eye.png' alt='img' className='img-fluid eye' />
                                    </div>
                                    <div className='endpara'>
                                        <p className='lastpara'>Important: please read our <span> Selection Criteria </span> before applying</p>
                                        <button onClick={() => { settoggle(!toggle) }}>Continue</button>
                                    </div>

                                </div>
                            </>
                            :
                            <>

                                <div className='applicationcard'>
                                    <div className='mainheads'>
                                        <h2>Sign in</h2>
                                        <p>Sign in to your account to admin</p>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input
                                                placeholder="Username"
                                                type="email" name="email" value={email} onChange={handleChange}
                                            />
                                            {Object.keys(emailError).map((key) => {
                                                return <p className="inputErrors">{emailError[key]}</p>
                                            })}
                                            <label>Email Address</label>
                                        </div>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input
                                                type={inputType ? "text" : "password"} name="password" value={password} onChange={handleChange}
                                                placeholder="Password"
                                            />
                                            {Object.keys(passwordError).map((key) => {
                                                return <p className="inputErrors">{passwordError[key]}</p>
                                            })}
                                            <label>Password</label>
                                        </div>
                                        <img src='\assets\eye.png' alt='img' className='img-fluid eye' style={{ cursor: "pointer" }} onClick={() => setInputType(!inputType)} />
                                    </div>

                                    <div className='endpara'>
                                        <div className='parentsssssss'>
                                            <div className='chec'>
                                                <div class="example">
                                                    <label class="checkbox-button">
                                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                        <span class="checkbox-button__control"></span>
                                                        <span class="checkbox-button__label">Remember me</span>
                                                    </label>
                                                </div>

                                            </div>
                                            <p className='forget'>Forgot Password?</p>
                                        </div>

                                        <button onClick={signinHandle}>Sign In</button>
                                        {/* <Link to="yourproject/:tab">  <button onClick={() => { settoggle(!toggle) }}>Sign In</button></Link> */}

                                    </div>

                                </div>
                            </>
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Startapplication