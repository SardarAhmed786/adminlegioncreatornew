import React, { useState } from 'react'
import "./mainprojectdetail.scss"
const Kyc = () => {
    const [toggle, settoggle] = useState(true);
    return (
        <>
            <div className='right'>
                <div className='kyccard'>
                    {
                        toggle ?
                            <div className='parentz'>
                                <h2>KYC Verification</h2>
                                <button onClick={() => { settoggle(!toggle) }}>Start KYC</button>
                            </div>
                            :
                            <>
                            <div className='cardkyc'>
                                <h2>KYC Verification</h2>
                                <div className='innercardkyc'>
                                    <div className='innerparent'>
                                        <img src='\assets\verify1.png' alt='img' className='img-fluid' />
                                        <div className='textinners'>
                                            <p>KYC Verifications Completed</p>
                                            <h6>Your verification was successful. You have been verified</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='detailcardkyc'>
                                <div className='detailheading'>
                                    <h2>Personal Details</h2>
                                </div>
                                <div className='namedetail'>
                                    <h6>Name:</h6>
                                    <p>Nelle Legros DVM</p>
                                </div>
                                <div className='namedetail'>
                                    <h6>ID Card No.:</h6>
                                    <p>1234 56789012345 6</p>
                                </div>
                                <div className='namedetail'>
                                    <h6>Address:</h6>
                                    <p>2542 Pike Street, San Diego, California 92126, USA</p>
                                </div>
                            </div>
                            </>
                    }



                </div>
            </div>
        </>
    )
}

export default Kyc