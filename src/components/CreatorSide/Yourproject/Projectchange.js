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

    const [activeTab, setActiveTab] = useState('link-1');

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
        setSearchInput(""); // Clearing the search input when switching filters
        // getYourProjectsHandle(); // Triggering the function to fetch projects with the new filter
    }


    const mytoken = localStorage.getItem('token');
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
        if (!filter) {
            // Set filter based on activeTab if not provided
            switch (activeTab) {
                case "link-1":
                    filter = "live";
                    break;
                case "link-2":
                    filter = "upcoming";
                    break;
                case "link-3":
                    filter = "ended";
                    break;
                default:
                    filter = "live"; // Default filter if none matched
            }
        }

        axios.get(Environment?.backendUrl + `api5/launchpad/launchpadSearchListing?search=${searchInput ? searchInput : ""}&filter=${filter}&limit=${limit}&page=${page}`)
            .then((response) => {
                console.log("🚀 ~ .then ~ response: getAllApplicantsHandle", response)
                setLoader(false);
                setAllProjects(response?.data?.data)
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
                            <Nav.Link eventKey="link-1" onClick={() => getYourProjectsHandle("live")}>Pending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => getYourProjectsHandle("upcoming")}>Approved</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" onClick={() => getYourProjectsHandle("ended")}>
                                Rejected
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                {activeTab === 'link-1' && (
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
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className='bold'>EARN NETWORK</p>
                                                    <h6 className='light'>$EARN</h6>
                                                </td>
                                                <td>
                                                    <p className='bold'>Ruth Wilson</p>

                                                </td>
                                                <td><p className='bold'>14/11/2023</p></td>
                                                <td><button>View</button></td>

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
                                                <th>Total Raised</th>
                                                <th>Total Raised</th>
                                                <th>Chain</th>
                                                <th>Contributors</th>
                                                <th>Start Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allProjects?.map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className='innerparent'>
                                                                    <div className='left'>
                                                                        <img src={data?.projectLogo} alt='img' className='img-fluid' />
                                                                    </div>
                                                                    <div className='right'>
                                                                        <p className='bold'>{data?.projectName}</p>
                                                                        <h6>{data?.tokenSymbol}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className='bold'>0</p></td>
                                                            <td><p className='green'>Live</p></td>
                                                            <td><p className='bold'>BSC</p></td>
                                                            <td><p className='bold'>0</p></td>
                                                            <td><p className='bold'>{changeDateFormate(data?.startTime)}</p></td>
                                                            <td><Link to={`/launchpad-details/${data?.id}`}><button>Details</button></Link></td>
                                                        </tr>
                                                    )
                                                })
                                            }
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
                                                <th>Total Raised</th>
                                                <th>Total Raised</th>
                                                <th>Chain</th>
                                                <th>Contributors</th>
                                                <th>Start Date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allProjects?.map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className='innerparent'>
                                                                    <div className='left'>
                                                                        <img src={data?.projectLogo} alt='img' className='img-fluid' />
                                                                    </div>
                                                                    <div className='right'>
                                                                        <p className='bold'>{data?.projectName}</p>
                                                                        <h6>{data?.tokenSymbol}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className='bold'>0</p></td>
                                                            <td><p className='green'>Live</p></td>
                                                            <td><p className='bold'>BSC</p></td>
                                                            <td><p className='bold'>0</p></td>
                                                            <td><p className='bold'>{changeDateFormate(data?.startTime)}</p></td>
                                                            <td><Link to={`/launchpad-details/${data?.id}`}><button>Details</button></Link></td>
                                                        </tr>
                                                    )
                                                })
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