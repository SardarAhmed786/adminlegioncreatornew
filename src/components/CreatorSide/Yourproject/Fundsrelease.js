import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./yourproject.scss"
const Fundsrelease = () => {
  const [activeTab, setActiveTab] = useState('link-1');
  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  }
  return (
    <div className='right'>
      <div className='uppercard'>
        <h5>Release Funds</h5>
        <p>Qui reiciendis optio et assumenda beatae</p>
      </div>
      <div className='mainssss'>
        <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Pending</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Approved</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              Rejected
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
                      <th>Project</th>
                      <th>Amount</th>
                      <th>Submit By</th>
                      <th>Submission Date</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>$30.5K</p></td>

                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td><p className='bold'>14/11/2023</p></td>
                      <td><button className='appr'>Approve</button></td>
                      <td><button className='rejc'>Reject</button></td>
                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>$30.5K</p></td>

                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td><p className='bold'>14/11/2023</p></td>
                      <td><button className='appr'>Approve</button></td>
                      <td><button className='rejc'>Reject</button></td>
                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>$30.5K</p></td>

                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td><p className='bold'>14/11/2023</p></td>
                      <td><button className='appr'>Approve</button></td>
                      <td><button className='rejc'>Reject</button></td>
                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>$30.5K</p></td>

                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td><p className='bold'>14/11/2023</p></td>
                      <td><button className='appr'>Approve</button></td>
                      <td><button className='rejc'>Reject</button></td>
                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>$30.5K</p></td>

                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td><p className='bold'>14/11/2023</p></td>
                      <td><button className='appr'>Approve</button></td>
                      <td><button className='rejc'>Reject</button></td>
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
                      <th>Project</th>
                      <th>Transaction Hash</th>
                      <th>Amount</th>
                      <th>Submit By</th>
                      <th>Submission Date</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>0x4c595ad...d18 <img src='\assets\External_Link.png' alt='img' className='img-fluid' /></p></td>

                      <td><p className='bold'>$30.5K</p></td>
                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td>14/11/2023</td>

                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>0x4c595ad...d18 <img src='\assets\External_Link.png' alt='img' className='img-fluid' /></p></td>

                      <td><p className='bold'>$30.5K</p></td>
                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td>14/11/2023</td>

                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>0x4c595ad...d18 <img src='\assets\External_Link.png' alt='img' className='img-fluid' /></p></td>

                      <td><p className='bold'>$30.5K</p></td>
                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td>14/11/2023</td>

                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>0x4c595ad...d18 <img src='\assets\External_Link.png' alt='img' className='img-fluid' /></p></td>

                      <td><p className='bold'>$30.5K</p></td>
                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td>14/11/2023</td>

                    </tr>
                    <tr>
                      <td>

                        <p className='bold'>EARN NETWORK</p>
                        <h6>$EARN</h6>

                      </td>
                      <td><p className='bold'>0x4c595ad...d18 <img src='\assets\External_Link.png' alt='img' className='img-fluid' /></p></td>

                      <td><p className='bold'>$30.5K</p></td>
                      <td><p className='bold'>Ruth Wilson</p></td>
                      <td>14/11/2023</td>

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

        </>
      )}
    </div>
  )
}

export default Fundsrelease