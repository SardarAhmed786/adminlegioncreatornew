import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./mainprojectdetail.scss"
import ProgressBar from 'react-bootstrap/ProgressBar';
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }
    return (
        <div className='right'>
            <div className='uppercard'>
                <div className='left'>
                    <div className='uppercardparent'>
                        <div className='left'>
                            <p>Current AVG ROI (USD)</p>
                            <h6>1.24x</h6>
                        </div>
                        <div className='right'>
                            <p>ATH AVG ROI (USD)</p>
                            <h6>25.71x</h6>
                        </div>
                    </div>
                    <div className='uppercardparent'>
                        <div className='left'>
                            <p>Current AVG ROI (USD)</p>
                            <h6>1.24x</h6>
                        </div>
                        <div className='right'>
                            <p>ATH AVG ROI (USD)</p>
                            <h6>25.71x</h6>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="cardprogress">
                        <div className="cardprogressheadings">
                            <p className="cardprogresspara">Gainers / Losers Number</p>

                        </div>
                        <ProgressBar now={50} />
                        <div className="cardprogressheadings">
                            <p className="cardprogressparaa">33</p>
                            <h6 className="cardprogresshead">31</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainssss'>
                <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Global Stats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">My Contribution</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">
                        Watchlist
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
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Market Cap</th>
                                          
                                            <th>Volume 24h</th>
                                            <th>Roi</th>
                                            <th>ATH ROI</th>
                                            <th>Raised</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
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
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Market Cap</th>
                                          
                                            <th>Volume 24h</th>
                                            <th>Roi</th>
                                            <th>ATH ROI</th>
                                            <th>Raised</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
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
                        <div className='main-card'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead className='tblheadss'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Market Cap</th>
                                          
                                            <th>Volume 24h</th>
                                            <th>Roi</th>
                                            <th>ATH ROI</th>
                                            <th>Raised</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='parenttbl'>
                                                    <div className='tblimg'>
                                                        <img src='\assets\star1.png' alt='img' className='img-fluid startimagess'/>
                                                    </div>
                                                    <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid leftmainimg' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                                </div>
                                             
                                            </td>
                                            <td><p className='bold'>$0.0216</p>
                                            <h6 className='orange'>-1.4%</h6></td>
                                            <td><p className='bold'>$863.72K</p></td>
                                            <td><p className='bold'>$81.38K</p></td>
                                            <td><p className='bold'>1.9x</p></td>
                                            <td><p className='bold'>146.4x</p></td>
                                            <td><p className='bold'>$21.4M</p></td>
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

export default Dashboard