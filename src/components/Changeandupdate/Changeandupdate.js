import React from 'react'
import "./changeandupdate.scss"


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../Header/Header';
const Changeandupdate = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <Header />
            <section className='mainchange'>
                <div className='custom-container'>
                    <div className='parent'>
                        <div className='left'>
                            <div className='maincard'>
                                <div className='uppertext'>
                                    <h2>Changes and Updates</h2>
                                    <p>Changes on <span>April 22, 2024</span></p>
                                </div>
                                <div className='brdr'></div>
                                <div className='bannertext'>
                                    <h2>Banner image changed</h2>
                                    <button>New</button>
                                    <div className='bannerimage'>
                                        <img src='\assets\changemainimg.svg' alt='img' className='img-fluid mainbann' />
                                    </div>
                                    <button className='red'>Old</button>
                                    <div className='bannerimage'>
                                        <img src='\assets\changemainimg1.svg' alt='img' className='img-fluid mainbann' />
                                    </div>
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Project image changed</h2>
                                        <div className='parentsssss'>
                                            <div className='leftssss'>
                                                <button>New</button>
                                                <img src='\assets\Frame53.svg' alt='img' className='img-fluid' />
                                            </div>
                                            <div className='rightssss'>
                                                <button>New</button>
                                                <img src='\assets\Frame54.svg' alt='img' className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Token Price Changed</h2>
                                        <div className='parentsssss'>
                                            <div className='leftssss'>
                                                <button>New</button>
                                                <h3 className='fornum'>$0.03 USD</h3>
                                            </div>
                                            <div className='rightssss'>
                                                <button>New</button>
                                                <h3 className='fornum'>$0.05 USD</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='brdr'></div>
                                    <h2>Team Experience and Background: Updated</h2>
                                    <button>New</button>
                                    <ul>
                                        <li>
                                            Alex Johnson, CEO: Over a decade of experience in logistics and supply chain management, with a strong background in strategic planning and business development.
                                        </li>
                                        <li>
                                            Maria Chen, CTO: Renowned for her expertise in blockchain technology, particularly in developing blockchain solutions for enterprise applications.</li>
                                        <li>
                                            Raj Patel, CFO: Brings extensive experience in financial management and venture capital, specializing in fintech and blockchain startups.
                                        </li>
                                        <li>

                                            Sophia Rodriguez, COO: Expert in operational efficiency and process optimization, with a focus on integrating blockchain technology into traditional supply chain processes.
                                        </li>
                                        <li>

                                            Liam Smith, CMO: Skilled in digital marketing and brand strategy, with a track record of successful marketing campaigns in tech and blockchain sectors.
                                        </li>
                                        <li>

                                            Emily Wang, CPO (Chief Product Officer): Experienced in product development and management, particularly in software and blockchain-based applications.
                                        </li>
                                        <li>
                                            Jordan Lee, CSO (Chief Strategy Officer): Specializes in corporate strategy with an emphasis on emerging technologies and market expansion strategies in the blockchain industry.
                                        </li>
                                        <li>

                                            Anita Desai, CCO (Chief Compliance Officer): Expert in regulatory compliance and legal frameworks, ensuring the company adheres to global blockchain and data protection regulations.
                                        </li>
                                    </ul>
                                    <button className='red'>old</button>
                                    <ul>
                                        <li>
                                            Alex Johnson, CEO: Over a decade of experience in logistics and supply chain management, with a strong background in strategic planning and business development.
                                        </li>
                                        <li>

                                            Maria Chen, CTO: Renowned for her expertise in blockchain technology, particularly in developing blockchain solutions for enterprise applications.
                                        </li>
                                        <li>

                                            Raj Patel, CFO: Brings extensive experience in financial management and venture capital, specializing in fintech and blockchain startups.
                                        </li>
                                        <li>

                                            Sophia Rodriguez, COO: Expert in operational efficiency and process optimization, with a focus on integrating blockchain technology into traditional supply chain processes.
                                        </li>
                                        <li>

                                            Liam Smith, CMO: Skilled in digital marketing and brand strategy, with a track record of successful marketing campaigns in tech and blockchain sectors.
                                        </li>
                                        <li>
                                            Emily Wang, CPO (Chief Product Officer): Experienced in product development and management, particularly in software and blockchain-based applications.</li>
                                    </ul>
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Partnerships and Collaborations: Updated</h2>
                                        <button>New</button>
                                        <p className='para'>We've partnered with logistics companies like FastTrack Logistics and retail giants like RetailCorp to enhance our platform's utility and credibility. We're also part of the Blockchain in Transport Alliance (BiTA).</p>
                                        <div className='bannerimage forhight'>
                                            <img src='\assets\mmmmmm.svg' alt='img' className='img-fluid mainbann' />
                                        </div>
                                        <button className='red'>Old</button>
                                        <p className='para'>We've partnered with logistics companies like FastTrack Logistics and retail giants like RetailCorp to enhance our platform's utility and credibility. We're also part of the Blockchain in Transport Alliance (BiTA).</p>
                                        <div className='bannerimage forhight'>
                                            <img src='\assets\mmmmmm.svg' alt='img' className='img-fluid mainbann' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className="maincardcontact">
                                <h2>Contact Information</h2>
                                <div className="brdr"></div>
                                <div className='rightparents'>
                                    <p>Contact Name:</p>
                                    <h6>Patrick Murphy</h6>
                                </div>
                                <div className='rightparents'>
                                    <p>Contact Telegram:</p>
                                    <h6>https://t.me/patrickmurphy</h6>
                                </div>
                                <div className='rightparents'>
                                    <p>Contact Email:</p>
                                    <h6>patrickmurphy@gmail.com</h6>
                                </div>
                            </div>
                            <button className='staking' >Tier & Staking Settings</button>
                            <div className='endtwicebtns'>
                                <button className='reject' onClick={handleShow}>Reject</button>
                                <button className='approve'>Reject</button>
                            </div>
                        </div>

                    </div >
                </div >


            </section>
            <Modal className='rejectmodal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reject</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <h2 className='headingmodal'>State reason for rejecting this entry. The owner will get a notification promltly.</h2>
                    <p className='reason'>Rejection Reason</p>
                    <div className='uuuuu'>
                        <textarea type="text" placeholder='Start writing here...' />
                   
                    </div>
                    <div className='twicebuttonss'>
                        <button className='cancle'>Cancel</button>
                        <button className='Submit'>Submit</button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Changeandupdate