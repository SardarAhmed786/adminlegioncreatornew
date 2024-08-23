import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import "./yourproject.scss"
import { Link } from 'react-router-dom';
import Environment from '../../../utils/Environment';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../../utils/loader/Loader';

const Projectchange = () => {

    const [activeTab, setActiveTab] = useState('pending');

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
        setSearchInput(""); // Clearing the search input when switching filters
        // getYourProjectsHandle(); // Triggering the function to fetch projects with the new filter
    }


    const mytoken = localStorage.getItem('mytoken');
    const [loader, setLoader] = useState(false);
    const [allProjects, setAllProjects] = useState(null);
    console.log("🚀 ~ Application ~ allProjects:", allProjects)
    const [searchInput, setSearchInput] = useState(null);
    const [projectFilter, setProjectFilter] = useState(null);

    // pagenition============================

    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPage(selectedPage)
    };

    // pagenition============================

    const changeDateFormate = (getTime) => {
        const originalDate = new Date(getTime);

        // Format the date
        const formattedDate = originalDate.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });

        // Update the state with the formatted date
        return formattedDate;
    }

    const getYourProjectsHandle = (filter) => {
        setLoader(true);
        axios.get(`${Environment?.backendUrl}/launchpadUpdateHistory/launchpadUpdateListing?search=${searchInput ? searchInput : ""}&filter=${filter ? filter : 'pending'}&limit=${limit}&page=${page}`, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                console.log("🚀 ~ .then ~ response: getAllCategories", response)
                setLoader(false);
                setAllProjects(response?.data?.data);
                toast.success(response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
            .catch((err) => {
                setLoader(false);
                toast.error(err.response?.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    }


    useEffect(() => {
        getYourProjectsHandle();
    }, [searchInput])


    return (
        <>
            {loader && <Loader />}
            <div className='right'>
                <div className='uppercard'>
                    <h5>Project Changes</h5>
                    <p>All projects Changes and Updates</p>
                </div>
                <div className='mainssss'>
                    <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="pending" onClick={() => getYourProjectsHandle("pending")}>Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="approve" onClick={() => getYourProjectsHandle("approve")}>Approved</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="rejected" onClick={() => getYourProjectsHandle("rejected")}>
                                Rejected
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                {activeTab === 'pending' && (
                    <>
                        <div className='parentcardmain'>

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
                                            {
                                                allProjects?.length > 0 ?
                                                    allProjects?.map((data, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <p className='bold'>{data?.projectName}</p>
                                                                    <h6 className='light'>{data?.tokenSymbol}</h6>
                                                                </td>
                                                                <td>
                                                                    <p className='bold'>{data?.User?.full_name}</p>
                                                                </td>
                                                                <td><p className='bold'>{changeDateFormate(data?.createdAt)}</p></td>
                                                                <td><Link to={`/update-application-detail/${data?.id}`}><button>View</button></Link></td>
                                                            </tr>
                                                        )
                                                    })
                                                    : "No project found"
                                            }
                                        </tbody>
                                    </table>
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
                                    <input type='text' placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e?.target?.value)} />
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
                                                <th>Submit By</th>
                                                <th>Submission Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allProjects?.length > 0 ?

                                                    allProjects?.map((data, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <p className='bold'>{data?.projectName}</p>
                                                                    <h6 className='light'>{data?.tokenSymbol}</h6>
                                                                </td>
                                                                <td>
                                                                    <p className='bold'>{data?.User?.full_name}</p>
                                                                </td>
                                                                <td><p className='bold'>{changeDateFormate(data?.createdAt)}</p></td>
                                                                <td><Link to={`/update-application-detail/${data?.id}`}><button>View</button></Link></td>
                                                            </tr>
                                                        )
                                                    })
                                                    : "No project found"
                                            }
                                        </tbody>
                                    </table>
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
                                    <input type='text' placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e?.target?.value)} />
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
                                                <th>Submit By</th>
                                                <th>Submission Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allProjects?.length > 0 ?
                                                    allProjects?.map((data, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <p className='bold'>{data?.projectName}</p>
                                                                    <h6 className='light'>{data?.tokenSymbol}</h6>
                                                                </td>
                                                                <td>
                                                                    <p className='bold'>{data?.User?.full_name}</p>
                                                                </td>
                                                                <td><p className='bold'>{changeDateFormate(data?.createdAt)}</p></td>
                                                                <td><Link to={`/update-application-detail/${data?.id}`}><button>View</button></Link></td>
                                                            </tr>
                                                        )
                                                    })
                                                    : "No project found"
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Projectchange