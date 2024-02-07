import React from 'react'
import Footer from '../Footer/Footer'
import './legionlaunchpad.scss'
import Header from '../Header/Header'

const Legionlaunchpad = () => {
    return (
        <>
        
            <section className="legionlauncpad">
                <div className="custom-container">
                    <img src="\assets\launchpadlogo.svg" alt="launchpadlogo" className="launchpadlogo" />
                    <div className="launchpadinner">
                        <div className="innerleft">
                            <h6 className="launchpadhead">Welcome to Legion Launchpad</h6>
                            <p className="launchpadpara">Please Login to your account</p>
                            <div class="material-textfield">
                                <input placeholder="Enter your email" type="text" />
                                <label>Email Address</label>
                            </div>
                            <div class="material-textfield">
                                <input placeholder="Enter Password" type="text" />
                                <label>Password</label>
                            </div>
                            <div className='chec'>
                                <div class="example">
                                    <label class="checkbox-button">
                                        <input type="checkbox" class="checkbox-button__input" id="choice1-1" name="choice1" />
                                        <span class="checkbox-button__control"></span>
                                        <span class="checkbox-button__label">Remember me</span>
                                    </label>
                                </div>
                            </div>
                            <button className="loginbtn">Log In</button>
                        </div>
                        <div className="innerright">
                            <img src="\assets\qr-legion.svg" alt="qrimg" className="qrimg" />
                            <h6 className="loginhead">Login with QR Code</h6>
                            <p className="loginpara">Scan this QR with the <span className="bluetext">Legion Mobile App</span> to login instantly.</p>
                        </div>
                    </div>
                    <p className="lastpara">Don't have an account?<span className="whitetxt">Sign Up</span></p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Legionlaunchpad