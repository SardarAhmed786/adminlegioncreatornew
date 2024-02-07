import React, { useState } from 'react'
import "./startapplication.scss"
import { Link } from 'react-router-dom';
const Startapplication = () => {
    const [toggle, settoggle] = useState(false);
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
                                        <p>Sign in to your creator account</p>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Enter your email" type="text" />
                                            <label>Email Address</label>
                                        </div>
                                    </div>
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Password" type="text" />
                                            <label>Password</label>
                                        </div>
                                        <img src='\assets\eye.png' alt='img' className='img-fluid eye' />
                                    </div>

                                    <div className='endpara'>
                                        <div className='chec'>
                                            <div class="example">
                                                <label class="checkbox-button">
                                                    <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                                    <span class="checkbox-button__control"></span>
                                                    <span class="checkbox-button__label">Forgot Password?</span>
                                                </label>
                                            </div>
                                        </div>
                                        <Link to="yourproject/:tab">  <button onClick={() => { settoggle(!toggle) }}>Sign In</button></Link>
                                      
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