import React, { useState } from 'react'
import "./mainprojectdetail.scss"
import { Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
const Myprofile = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='right'>

                <div className='uppercard'>
                    <div className='leftmain'>
                        <div className='mainleft'>
                            <div className='innerleft'>
                                <div className='innerimage'>
                                    <img src='\assets\Group111.png' alt='img' className='img-fluid group' />
                                </div>
                            </div>
                            <div className='innerright'>
                                <div className='paraparent'>
                                    <p>Justin Reed</p>
                                    <div className='paraimg'>
                                        <img src='\assets\Legend.png' alt='img' className='img-fluid' />
                                        <img src='\assets\verify.png' alt='img' className='img-fluid' />
                                    </div>

                                </div>
                                <h6>Member Since: Jan 2022</h6>
                                <p className='downparacard'>💰 Crypto Investor. Passionate about NFTs and digital art and Web3.  #CryptoCurious #LGXArmy #NFTCollections #Web3</p>
                            </div>
                        </div>

                    </div>
                    <div className='right'>
                        <div className='boltcard'>
                            <div className='mainboltparent'>
                                <p>Bolts</p>
                                <h6>22.1K</h6>
                            </div>
                            <div className='mainboltparent'>
                                <p>Referrals</p>
                                <h6>500</h6>
                            </div>
                            <div className='mainboltparent'>
                                <p>Followers</p>
                                <h6>2.7K</h6>
                            </div>
                            <div className='mainboltparent'>
                                <p>Following</p>
                                <h6>2.7K</h6>
                            </div>
                            <div className='mainboltparent'>
                                <p>Socials</p>
                                <div className='socialicons'>
                                    <img src='\assets\3057696_instagram_media_network_social_icon 1.png' alt='img' className='img-fluid' />
                                    <img src='\assets\3057660_media_message_network_social_icon 1.png' alt='img' className='img-fluid' />
                                    <img src='\assets\8545495_discord_message_interaction_logo_communication_icon 1.png' alt='img' className='img-fluid' />
                                    <img src='\assets\3057625_facebook_media_network_social_icon 1.png' alt='img' className='img-fluid' />
                                </div>
                            </div>
                            <div className='brdr'></div>
                            <div className='mainboltparent'>
                                <p>Wallet</p>
                                <h6>0x0717E7...535</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lowerparenttabs'>
                    <div className='mainssss'>
                        <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Tokens</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Collectibles</Nav.Link>
                            </Nav.Item>

                        </Nav>
                        {activeTab === 'link-1' && (
                            <>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='btccard'>
                                    <div className='btcparent'>
                                        <div className='btcleft'>
                                            <div className='btninnerleft'>
                                                <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                            </div>
                                            <div className='btninnerright'>
                                                <p>Bitcoin<span>BTC</span></p>
                                                <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                            </div>
                                        </div>
                                        <div className='btcright'>
                                            <p>2.5456 BTC</p>
                                            <h6>$59050.79</h6>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === 'link-2' && (
                            <>
                                <div className='swapacc'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className='accmainparent'>
                                                    <div className='first'>
                                                        <div className='innerfirst'>
                                                            <img src='\assets\inneracc.png' alt='img' className='img-fluid pic' />
                                                        </div>
                                                        <div className='innerfirst'>
                                                            <h6>Collection</h6>
                                                            <p>Pudgy Penguins</p>
                                                        </div>
                                                    </div>
                                                    <div className='firstr'>
                                                        <h6>NFTs Owned</h6>
                                                        <p>4</p>
                                                    </div>
                                                    <div className='firstr'>
                                                        <h6>Floor Price</h6>
                                                        <p>11.14 ETH</p>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className='bodyparent'>
                                                    <p>Network fee</p>
                                                    <h6>~$1.47</h6>
                                                </div>
                                                <div className='bodyparent'>
                                                    <p>Price Impact</p>
                                                    <h6>-14.14%</h6>
                                                </div>
                                                <div className='bodyparent'>
                                                    <p>Minimum output</p>
                                                    <h6>521.41 BNB</h6>
                                                </div>
                                                <div className='bodyparent'>
                                                    <p>Expected output</p>
                                                    <h6>521.61 BNB</h6>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='second'>
                        <div className='budagcard'>
                            <p>Badges earned (25)</p>
                            <div className='mainmultiple'>
                                <img src='\assets\multiple.png' alt='img' className='img-fluid' />
                            </div>
                        </div>
                        <div className='secondyellowcard'>
                            <div className='parentticket'>
                                <h6>Tickets Available</h6>
                                <button onClick={handleShow}>Ticket History</button>
                            </div>
                            <div className='tickentendsss'>
                                <div className='first'>
                                    <p>Tier 1 Tickets</p>
                                    <h6>35</h6>
                                </div>
                                <div className='first'>
                                    <p>Tier 2 Tickets</p>
                                    <h6>52</h6>
                                </div>
                                <div className='first'>
                                    <p>Tier 3 Tickets</p>
                                    <h6>61</h6>
                                </div>
                            </div>
                        </div>
                        <div className='groupcard'>
                            <h2>Groups(11)</h2>
                            <div className='groupinner'>
                                <div className='groupinnerparent'>
                                    <div className='leftgroup'>
                                        <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='rightgroup'>
                                        <p>Web3 Group</p>
                                        <h6>Web3 is a term used to describe the next itera</h6>
                                    </div>
                                </div>

                            </div>
                            <div className='groupinner'>
                                <div className='groupinnerparent'>
                                    <div className='leftgroup'>
                                        <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='rightgroup'>
                                        <p>Web3 Group</p>
                                        <h6>Web3 is a term used to describe the next itera</h6>
                                    </div>
                                </div>

                            </div>
                            <div className='groupinner'>
                                <div className='groupinnerparent'>
                                    <div className='leftgroup'>
                                        <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                    </div>
                                    <div className='rightgroup'>
                                        <p>Web3 Group</p>
                                        <h6>Web3 is a term used to describe the next itera</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='entbtnsss'>
                            <button>See More</button>
                        </div>
                    </div>

                </div>

            </div>
            <Modal className='ticketmodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Ticket History</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='head'>
                        <h2>Today, Jul 28, 2022</h2>
                    </div>
                    <div className='maindrop'>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        <p>Tier 1 Tickets purchased</p>
                                        <h6><img src='\assets\ticket 1.png' alt='img' className='img-fluid'/>20</h6>
                                    </div>
                                    <img src='\assets\arrow-downgreen.png' alt='img' className='img-fluid'/>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        <p>Tier 1 Tickets purchased</p>
                                        <h6><img src='\assets\ticket 1.png' alt='img' className='img-fluid'/>150</h6>
                                    </div>
                                    <img src='\assets\arrow-downgreen.png' alt='img' className='img-fluid'/>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        <p>Tier 1 Tickets purchased</p>
                                        <h6><img src='\assets\ticket 1.png' alt='img' className='img-fluid'/>20</h6>
                                    </div>
                                    <img src='\assets\arrow-downgreen.png' alt='img' className='img-fluid'/>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='head'>
                        <h2>Yesterday, Jul 27, 2022</h2>
                    </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        <p>Tier 1 Tickets purchased</p>
                                        <h6> <img src='\assets\ticket 1.png' alt='img' className='img-fluid'/>150</h6>
                                    </div>
                                    <img src='\assets\arrow-downgreen.png' alt='img' className='img-fluid'/>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='innertext'>
                                        <p>Tier 1 Tickets purchased</p>
                                        <h6><img src='\assets\ticket 1.png' alt='img' className='img-fluid'/>3</h6>
                                    </div>
                                    <img src='\assets\arrow-downgreen.png' alt='img' className='img-fluid'/>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Myprofile