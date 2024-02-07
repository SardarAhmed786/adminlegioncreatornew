import React, { useState } from 'react'
import "./mainprojectdetail.scss"
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from 'react-bootstrap';
const Supportticket = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            <div className='right'>
                <div className='supportticket'>
                    <div className='supportparent'>
                        <h2>Ticket History</h2>
                        <button onClick={handleShow}>Submit a request</button>
                    </div>
                    <div className='main-card'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='tblheadss'>
                                    <tr>
                                        <th>Date</th>
                                        <th>ID</th>
                                        <th>Status</th>

                                        <th>Department</th>
                                        <th>Category</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='bold'>20/12/2023 3:45</p>

                                        </td>
                                        <td><p className='bold'>65B321</p></td>
                                        <td><p className='orange'>Pending</p></td>
                                        <td><p className='bold'>Support</p></td>
                                        <td><p className='bold'>Launchpad</p></td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <p className='bold'>20/12/2023 3:45</p>

                                        </td>
                                        <td><p className='bold'>65B321</p></td>
                                        <td><p className='orange'>Pending</p></td>
                                        <td><p className='bold'>Support</p></td>
                                        <td><p className='bold'>Launchpad</p></td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <p className='bold'>20/12/2023 3:45</p>

                                        </td>
                                        <td><p className='bold'>65B321</p></td>
                                        <td><p className='orange'>Pending</p></td>
                                        <td><p className='bold'>Support</p></td>
                                        <td><p className='bold'>Launchpad</p></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='ticketmodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Submit a request</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='maindrop'>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        Select Department
                                    </div>
                                    <img src='\assets\arrow-downblue.png' alt='img' className='img-fluid' />

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span className="btnspan">Department</span>
                        </div>
                        <div className='dropbtn mt-3 mb-3'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        Category
                                    </div>
                                    <img src='\assets\arrow-downblue.png' alt='img' className='img-fluid' />

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span className="btnspan">Department</span>
                        </div>

                    </div>
                    <div className='muinput'>
                        <div class="material-textfield">
                            <input placeholder="Enter your email" type="text" />
                            <label>Email Address</label>
                        </div>
                    </div>
                    <div className='fortext'>
                        <textarea type="text" placeholder='Enter request description' />
                        <span className="btnspan">Department</span>
                    </div>
                    <div className='attachment'>
                        <p>Attachments <span>(Optional)</span></p>
                    </div>
                    <div className='wrapper'>
                        <label htmlFor='upload'>
                            <img src='\assets\paperclip-2.png' alt='img' className='img-fluid' />
                        </label>
                        <p className='gray'>Select File</p>
                        <input type='file' id='upload' placeholder='hhhhhhhhhh' className='d-none' />
                    </div>
                    <div className='twinsbtnsss'>
                        <button className='cancle'>Cancel</button>
                        <button className='submit' onClick={() => {
                            handleShow1();
                            handleClose();
                        }}>Submit</button>
                    </div>
                </Modal.Body>

            </Modal>
            <Modal className='participatemodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p className='formar'> Submitted Success!</p>
                        <h6 className='successpara'>Your request has been submitted successfully!</h6>
                        <button onClick={() => {
                            handleShow2();
                            handleClose1();
                        }} >Okay</button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal className='ticketmodal' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Request Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mainssss'>
                        <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Chat</Nav.Link>
                            </Nav.Item>

                        </Nav>

                    </div>
                    {activeTab === 'link-1' && (
                        <>
                            <div className='parenttabsss'>
                                <h6>Ticket ID</h6>
                                <p>65B321</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='parenttabsss'>
                                <h6>Department</h6>
                                <p>Support</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='parenttabsss'>
                                <h6>Category</h6>
                                <p>Legion App</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='parenttabsss'>
                                <h6>Date & Time</h6>
                                <p>05 Jun, 2022 11:21</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='parenttabsss'>
                                <h6>Attachment</h6>
                                <p>1 File</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='parenttabsss'>
                                <h6>Status</h6>
                                <p>Processing</p>
                            </div>
                            <div className='brdr'></div>
                            <div className='desc'>
                                <h5>Description</h5>
                                <p>Est accusantium voluptatibus qui voluptatem voluptas rem accusantium voluptatem qui sint eaque est autem quaerat et ipsam iste id blanditiis suscipit.</p>
                            </div>
                            <div className='endsss'>
                                <button>Cancel</button>
                            </div>
                        </>
                    )}
                    {activeTab === 'link-2' && (
                        <>
                            <div className='chatbox'>
                                <p>Aut rerum neque qui esse molestias qui corrupti assumen ut tenetur odit id</p>
                                <span>11:15 pm</span>
                            </div>
                            <div className='parentbluecard'>
                            <div className='bluechat'>
                                <p>Aut rerum neque qui esse molestias qui corrupti assumen ut tenetur odit id</p>
                                <span>11:15 pm</span>

                            </div>
                            <div className='chatimg'>   <img src='\assets\bitcoin-btc-logo 11.png' alt='img' className='img-fluid'/></div>
                         
                            </div>
                            <div className='maininput'>
                            <input type='text' placeholder='Write your Message'/>
                            <img src='\assets\Left Button.png' alt='img' className='img-fluid'/>
                            </div>
                            <div className='endsss'>
                                <button>Cancel</button>
                            </div>
                           
                        </>
                    )}
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Supportticket