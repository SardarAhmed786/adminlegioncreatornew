import React, { useState,useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./yourproject.scss"
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap'
import ReactPaginate from "react-paginate";

import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Liveprojects = () => {
    const token = localStorage.getItem('mytoken');
    const history = useHistory();
    const [updateList,setUpdateList]  = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    const [activeTab, setActiveTab] = useState('live');
    const handleSelect = async (selectedTab) => {
        setActiveTab(selectedTab);
        await getUpdate(selectedTab);
    };


         // pagination ============

         const [limit] = useState(10);
         const [page, setPage] = useState(1);
         const [pageCount, setPageCount] = useState([]);
     
         console.log(page, pageCount, "asd pageee");
     
         const handlePageChange = (e) => {
             const selectedPage = e.selected;
             setPage(selectedPage+1);
         };
     
         // pagination ============
  
         const getUpdate = async (filter) => {

            const config = {
                method: "get",
                url:  Environment.backendUrl + "/launchpad/launchpadSearchListing?limit=" + limit + "&offset=" + page + "&filter=" + filter + "&search=" + searchQuery,
                headers: {
                    Authorization: "Bearer " + token,
                },
            };
    
            try {
                const response = await axios(config);
                console.log(response?.data?.data);
                setUpdateList(response?.data?.data);
                setPageCount(response?.data?.count);
                console.log(response?.data?.count,"count");
                window.scroll(0, 0);
               
            } catch (error) {
                if (error.response && error.response.status === 401) {
    
                    history.push("/")
                } else {
    
                    console.error("Error fetching launchpads:", error);
    
                }
              
            }
        };

        useEffect(() => {
            getUpdate(activeTab);
        }, [searchQuery,page])

    return (
        <div className='right'>
            <div className='uppercard'>
                <h5>Projects</h5>
                <p>All projects on Legion Launchpad</p>
            </div>
            <div className='mainssss'>
                <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="live">Live</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="ended">
                            Ended
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
            {activeTab === 'live' && (
                <>
                    <div className='parentcardmain'>
                        <div className='parentmains'>
                            <div className='left'>
                                <input value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} type='text' placeholder='Search' />
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
                                            <th>Status</th>
                                            <th>Chain</th>
                                            <th>Contributors</th>
                                            <th>Start Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {updateList?.map((item,index) => {
                                            return(
                                                <>
                                        <tr key={index}>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src={item?.projectLogo} alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>{item?.projectName}</p>
                                                        <h6>${item?.tokenSymbol}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>${item?.projectFundsRaised}</p></td>
                                            <td><p className='green'>{item?.launchpadStatus}</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>{item?.startTime}</p></td>
                                            <td><Link to={"/userpresaleflow?id=" + item?.id}><button>Details</button></Link></td>
                                        </tr>
                                        </>
                                            )
                                          })}   
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagi">
                        <div className="rightsss">
                                {/* <div className='arrows'>
                                <img src='\assets\pegiarrow1.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow2.png' alt='1mg' className='img-fluid' />
                            </div> */}
                           
              {page >= 1 ?
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={Math.ceil(pageCount / limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  activeClassName="active"
                  forcePage={page - 1}
                />
                : ''}
                            {/* <div className='arrows' style={{ display: 'flex', gap: '13px', alignItems: 'center' }}>
                                <img src='\assets\pegiarrow3.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow4.png' alt='1mg' className='img-fluid' />
                            </div> */}
                        </div>
                    </div>
                        </div>
                    </div>

                </>
            )}
            {activeTab === 'upcoming' && (
                <>
                
                <div className='parentcardmain'>
                <div className='parentmains'>
                            <div className='left'>
                                <input value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} type='text' placeholder='Search' />
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
                                    {updateList?.map((item,index) => {
                                            return(
                                                <>
                                        <tr key={index}>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src={item?.projectLogo} alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>{item?.projectName}</p>
                                                        <h6>${item?.tokenSymbol}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>${item?.projectFundsRaised}</p></td>
                                            <td><p className='green'>{item?.launchpadStatus}</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>{item?.startTime}</p></td>
                                            <td><Link to={"/userpresaleflow?id=" + item?.id}><button>Details</button></Link></td>
                                        </tr>
                                        </>
                                            )
                                          })}   
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagi">
                        <div className="rightsss">
                            {/* <div className='arrows'>
                                <img src='\assets\pegiarrow1.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow2.png' alt='1mg' className='img-fluid' />
                            </div> */}
                           
              {page >= 1 ?
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={Math.ceil(pageCount / limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  activeClassName="active"
                  forcePage={page - 1}
                />
                : ''}
                            {/* <div className='arrows' style={{ display: 'flex', gap: '13px', alignItems: 'center' }}>
                                <img src='\assets\pegiarrow3.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow4.png' alt='1mg' className='img-fluid' />
                            </div> */}
                        </div>
                    </div>
                        </div>
                    </div>
                </>
            )}
            {activeTab === 'ended' && (
                <>
                   <div className='parentcardmain'>
                   <div className='parentmains'>
                            <div className='left'>
                                <input value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} type='text' placeholder='Search' />
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
                                    {updateList?.map((item,index) => {
                                            return(
                                                <>
                                        <tr key={index}>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src={item?.projectLogo} alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>{item?.projectName}</p>
                                                        <h6>${item?.tokenSymbol}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>${item?.projectFundsRaised}</p></td>
                                            <td><p className='green'>{item?.launchpadStatus}</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>{item?.startTime}</p></td>
                                            <td><Link to={"/userpresaleflow?id=" + item?.id}><button>Details</button></Link></td>
                                        </tr>
                                        </>
                                            )
                                          })}   
                                    </tbody>
                                </table>
                            </div>
                            <div className="pagi">
                        <div className="rightsss">
                                {/* <div className='arrows'>
                                <img src='\assets\pegiarrow1.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow2.png' alt='1mg' className='img-fluid' />
                            </div> */}
                           
              {page >= 1 ?
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={Math.ceil(pageCount / limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  activeClassName="active"
                  forcePage={page - 1}
                />
                : ''}
                            {/* <div className='arrows' style={{ display: 'flex', gap: '13px', alignItems: 'center' }}>
                                <img src='\assets\pegiarrow3.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow4.png' alt='1mg' className='img-fluid' />
                            </div> */}
                        </div>
                    </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Liveprojects