import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./yourproject.scss"
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap'
import Environment from '../../../utils/Environment';
import ReactPaginate from "react-paginate";

import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Updates = () => {

    const token = localStorage.getItem('mytoken');
    const history = useHistory();
    const [updateList, setUpdateList] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');
    const [searchQuery, setSearchQuery] = useState("");


    const changeDateFormate = (createdAt) => {
        console.log("🚀 ~ changeDateFormate ~ createdAt:", createdAt);
        const originalDate = new Date(createdAt);

        // Format the date and time
        const formattedDate = originalDate.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // Use 12-hour clock, you can set it to false for 24-hour clock
        });

        // Return the formatted date and time
        return formattedDate;
    }

    // pagination ============

    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState([]);

    console.log(page, pageCount, "asd pageee");

    const handlePageChange = (e) => {
        const selectedPage = e.selected;
        setPage(selectedPage + 1);
    };

    // pagination ============

    const handleSelect = async (selectedTab) => {
        setActiveTab(selectedTab);
        await getUpdate(selectedTab);
    };

    const getUpdate = async (filter) => {

        const config = {
            method: "get",
            url: Environment.backendUrl + "/updates/getLaunchpadAllUpdates?limit=" + limit + "&offset=" + page + "&filter=" + filter + "&search=" + searchQuery,
            headers: {
                Authorization: "Bearer " + token,
            },
        };

        try {
            const response = await axios(config);
            console.log(response?.data?.data);
            setUpdateList(response?.data?.data);
            setPageCount(response?.data?.count);
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
    }, [searchQuery, page])

    return (
        <>

            <div className='right'>
                <div className='uppercard'>
                    <h5>Projects</h5>
                    <p>All projects on Legion Launchpad</p>
                </div>
                <div className='mainssss'>
                    <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="pending">Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="approve" >Approved</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="rejected" > Rejected</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </div>
                {activeTab === 'pending' && (
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

                                </div>
                            </div>
                            <div className='main-card'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead className='tblheadss'>
                                            <tr>
                                                <th>Project</th>
                                                <th>Submit By</th>
                                                <th>Submission Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {updateList?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>
                                                                <div className='innerparent'>
                                                                    {/* <div className='left'>
                                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                        </div> */}
                                                                    <div className='right'>
                                                                        <p className='bold'>{item?.launchpad?.projectName}</p>
                                                                        <h6>${item?.launchpad?.tokenSymbol}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className='bold'>{item?.User?.full_name}</p></td>
                                                            <td><p className='bold'>{changeDateFormate(item?.createdAt)}</p></td>
                                                            <td><Link to={"/updatedroadmap?id=" + item?.id}><button>View</button></Link></td>
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
                {activeTab === 'approve' && (
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
                                                <th>Submit By</th>
                                                <th>Submission Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {updateList?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>
                                                                <div className='innerparent'>
                                                                    {/* <div className='left'>
                                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                        </div> */}
                                                                    <div className='right'>
                                                                        <p className='bold'>{item?.launchpad?.projectName}</p>
                                                                        <h6>${item?.launchpad?.tokenSymbol}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className='bold'>{item?.User?.full_name}</p></td>
                                                            <td><p className='bold'>{item?.createdAt}</p></td>
                                                            <td><Link to={"/updatedroadmap?id=" + item?.id}><button>View</button></Link></td>
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
                {activeTab === 'rejected' && (
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
                                                <th>Submit By</th>
                                                <th>Submission Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {updateList?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>
                                                                <div className='innerparent'>
                                                                    {/* <div className='left'>
                                                            <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                        </div> */}
                                                                    <div className='right'>
                                                                        <p className='bold'>{item?.launchpad?.projectName}</p>
                                                                        <h6>${item?.launchpad?.tokenSymbol}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className='bold'>{item?.User?.full_name}</p></td>
                                                            <td><p className='bold'>{item?.createdAt}</p></td>
                                                            <td><Link to={"/updatedroadmap?id=" + item?.id}><button>View</button></Link></td>
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
        </>
    );
};

export default Updates;
