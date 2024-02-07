import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import "./flowpresale.scss"
import Dropdown from 'react-bootstrap/Dropdown';
const Flowpresale = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }

    return (
        <>
            <section className='mainflow'>
                <div className="custom-container">
                    <div className='flowparent'>
                        <div className='mainssss'>
                            <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Live</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Upcoming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">
                                        Ended
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </div>
                        <div className='parentmains'>
                            <div className='left'>
                                <input type='text' placeholder='Search' />
                                <img src='\assets\Search_Magnifying_Glass.svg' alt='img' className='img-fluid' />
                            </div>
                            <div className='right'>
                                <div className='dropbtn'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <div className='muinput'>
                                                <div class="material-textfield">
                                                    <input placeholder="Name" type="text" />
                                                    <label>Sort by</label>
                                                </div>
                                            </div>
                                            <img src='\assets\Vector.png' alt='img' className='img-fluid' />
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
                                            <div className='muinput'>
                                                <div class="material-textfield">
                                                    <input placeholder="All" type="text" />
                                                    <label>Chains</label>
                                                </div>
                                            </div>
                                            <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">twitter</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">news article</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>

                    {activeTab === 'link-1' && (
                        <>
                            <div className='cardsparents'>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cardsparents'>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='parentcardflow'>
                                    <div className='maincontent'>
                                        <img src='\assets\cardsimg.png' alt='img' className='img-fluid cardimage' />
                                    </div>
                                    <div className='textparent'>
                                        <div className='main'>
                                            <div className='left'>
                                                <h2>Laika-AI</h2>
                                            </div>
                                            <div className='right'>
                                                <img src='\assets\ethereum-eth 2.svg' alt='img' className='img-fluid' />
                                                <button>Ended</button>
                                            </div>
                                        </div>
                                        <p className='grey'>Laika AI is an innovative platform at the forefront of the Web3 revolution, combining the power of artificial intelligence with decentralized technologies to transform the way you work and create.</p>
                                        <div className='softparent'>
                                            <h6>Soft</h6>
                                            <p>555.55 ETH</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Liquidity %:</h6>
                                            <p>55.52 %</p>
                                        </div>
                                        <div className='softparent'>
                                            <h6>Lockup Time:</h6>
                                            <p>365 Days</p>
                                        </div>
                                        <div className='timer'>
                                            <p>Starting in: <img src='\assets\time.svg' alt='img' className='img-fluid' /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='btnexplore'>
                                <button>Explore Projects</button>
                            </div>
                        </>
                    )}
                    {activeTab === 'link-2' && (
                        <>
                            <h1>ahmad</h1>
                        </>
                    )}
                    {activeTab === 'link-3' && (
                        <>
                            <h1>hamza</h1>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

export default Flowpresale