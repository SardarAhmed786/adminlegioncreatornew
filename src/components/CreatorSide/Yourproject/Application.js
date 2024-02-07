import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const Application = () => {
    return (
        <div className='right'>
            <div className='uppercard'>
                <div className='iii'>
                    <div className='iiitext'>
                        <h5>Your Applications</h5>
                        <p>Apply to launch your project on Legion Launchpad</p>
                    </div>

                </div>

            </div>

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
                                    <th>Chain</th>
                                    <th>Submit By</th>
                                    <th>Launch date</th>
                                    <th>Submission Date</th>

                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>

                                        <p className='bold'>EARN NETWORK</p>
                                        <h6>$$EARN</h6>


                                    </td>
                                    <td><p className='bold'>BSC</p></td>
                                    
                                    <td><p className='bold'>Ruth Wilson</p></td>
                                    <td><p className='bold'>23/2/2024</p></td>
                                    <td><p className='bold'>14/11/2023</p></td>
                                    <td><Link to="/userpresaleflow2"><button>View</button></Link></td>
                                </tr>
                                <tr>
                                    <td>

                                        <p className='bold'>EARN NETWORK</p>
                                        <h6>$$EARN</h6>


                                    </td>
                                    <td><p className='bold'>BSC</p></td>
                                    
                                    <td><p className='bold'>Ruth Wilson</p></td>
                                    <td><p className='bold'>23/2/2024</p></td>
                                    <td><p className='bold'>14/11/2023</p></td>
                                    <td><Link to="/userpresaleflow2"><button>View</button></Link></td>
                                </tr>
                                <tr>
                                    <td>

                                        <p className='bold'>EARN NETWORK</p>
                                        <h6>$$EARN</h6>


                                    </td>
                                    <td><p className='bold'>BSC</p></td>
                                    
                                    <td><p className='bold'>Ruth Wilson</p></td>
                                    <td><p className='bold'>23/2/2024</p></td>
                                    <td><p className='bold'>14/11/2023</p></td>
                                    <td><button>View</button></td>
                                </tr>
                                <tr>
                                    <td>

                                        <p className='bold'>EARN NETWORK</p>
                                        <h6>$$EARN</h6>


                                    </td>
                                    <td><p className='bold'>BSC</p></td>
                                    
                                    <td><p className='bold'>Ruth Wilson</p></td>
                                    <td><p className='bold'>23/2/2024</p></td>
                                    <td><p className='bold'>14/11/2023</p></td>
                                    <td><button>View</button></td>
                                </tr>
                                <tr>
                                    <td>

                                        <p className='bold'>EARN NETWORK</p>
                                        <h6>$$EARN</h6>


                                    </td>
                                    <td><p className='bold'>BSC</p></td>
                                    
                                    <td><p className='bold'>Ruth Wilson</p></td>
                                    <td><p className='bold'>23/2/2024</p></td>
                                    <td><p className='bold'>14/11/2023</p></td>
                                    <td><button>View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application