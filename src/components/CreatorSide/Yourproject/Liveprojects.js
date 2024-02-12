import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./yourproject.scss"
import { Link } from 'react-router-dom';

const Liveprojects = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }
    return (
        <div className='right'>
            <div className='uppercard'>
                <h5>Your Projects</h5>
                <p>Your project on Legion Launchpad</p>
            </div>
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
            {activeTab === 'link-1' && (
                <>
                    <div className='parentcardmain'>
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
                                            {/* <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item> */}
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
                                            {/* <Dropdown.Item href="#/action-3">an existing project that launched</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Project</th>
                                            <th>Total Raised</th>
                                            <th>Total Raised</th>
                                            <th>Chain</th>
                                            <th>Contributors</th>
                                            <th>Start Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><Link to="/userpresaleflow"><button>Details</button></Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </>
            )}
            {activeTab === 'link-2' && (
                <>
                
                <div className='parentcardmain'>
                        <div className='parentmains'>
                            <div className='left'>
                                <input type='text' placeholder='Search' />
                                <img src='\assets\Search_Magnifying_Glass.svg' alt='img' className='img-fluid' />
                            </div>
                            <div className='right'>
                                {/* <div className='dropbtn'>
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
                                </div> */}
                            </div>
                        </div>
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Project</th>
                                            <th>Total Raised</th>
                                            <th>Total Raised</th>
                                            <th>Chain</th>
                                            <th>Contributors</th>
                                            <th>Start Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><Link to="/userpresaleflow"><button>Details</button></Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {activeTab === 'link-3' && (
                <>
                   <div className='parentcardmain'>
                        <div className='parentmains'>
                            <div className='left'>
                                <input type='text' placeholder='Search' />
                                <img src='\assets\Search_Magnifying_Glass.svg' alt='img' className='img-fluid' />
                            </div>
                            <div className='right'>
                                {/* <div className='dropbtn'>
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
                                </div> */}
                            </div>
                        </div>
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Project</th>
                                            <th>Total Raised</th>
                                            <th>Total Raised</th>
                                            <th>Chain</th>
                                            <th>Contributors</th>
                                            <th>Start Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><Link to="/userpresaleflow"><button>Details</button></Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Liveprojects