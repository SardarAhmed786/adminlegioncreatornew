import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';
import axios from 'axios';

const Application = () => {

    // const id = props.match.params.id;
    const token = localStorage.getItem('mytoken');

    const [applicationsData, setApplicationsData] = useState(null);

    // pagenition============================

    const [limit] = useState(10);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPage(selectedPage)
    };

    // pagenition============================

    // timerformate ================================

    const changeDateFormate = (createdAt) => {
        const originalDate = new Date(createdAt);

        // Format the date
        const formattedDate = originalDate.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });

        // Update the state with the formatted date
        return formattedDate;
    }

    // timerformate ================================

    const applicationHandle = (search, filter) => {
        // setOpen(true);
        axios.get(
            `${Environment.backendUrl}/launchpad/launchpadApplicationListing?search=${search ? search : ""}&limit=${limit}&filter=${filter ? filter : "pending"}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )
            .then((response) => {
                console.log("🚀 ~ file: UserDetail.js:111 ~ .then ~ response: rejectApplicationHandle", response);
                // setOpen(false);
                console.log(response.data, response.data.msg, 'response.data.msg');

                if (response) {
                    setApplicationsData(response?.data?.data);
                    toast.success(response?.data?.applicationStatus?.msg, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
            })
            .catch((err) => {
                // setOpen(false);
                toast.error(err.response?.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    }

    useEffect(() => {
        applicationHandle();
    }, [])

    return (
        <div className='right'>
            <div className='uppercard'>
                <div className='iii'>
                    <div className='iiitext'>
                        <h5>Applications</h5>
                        <p>Application submitted on Legion Launchpad</p>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicationsData?.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <p className='bold'>{data?.projectName}</p>
                                                    <h6>${data?.tokenSymbol}</h6>
                                                </td>
                                                <td><p className='bold'>BSC</p></td>
                                                <td><p className='bold'>{data?.User?.full_name}</p></td>
                                                <td><p className='bold'>{changeDateFormate(data?.startTime)}</p></td>
                                                <td><p className='bold'>{changeDateFormate(data?.startTime)}</p></td>
                                                <td><Link to="/userpresaleflow2"><button>View</button></Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="pagi">
                        <div className="rightsss">
                            <div className='arrows'>
                                <img src='\assets\pegiarrow1.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow2.png' alt='1mg' className='img-fluid' />
                            </div>
                            <Pagination>
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item >{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item >{5}</Pagination.Item>
                            </Pagination>
                            <div className='arrows' style={{ display: 'flex', gap: '13px', alignItems: 'center' }}>
                                <img src='\assets\pegiarrow3.png' alt='1mg' className='img-fluid' />
                                <img src='\assets\pegiarrow4.png' alt='1mg' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application