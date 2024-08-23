import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../../../utils/loader/Loader';
import { Modal, Nav } from 'react-bootstrap';
// import DeployProject from '../../../hooks/dataSenders/deployProjectHook';
import { useWeb3React } from '@web3-react/core';
import Environment from '../../../utils/Environment';
import useWeb3 from '../../../hooks/useWeb3';
// import TokenDetails from '../../../hooks/dataFetchers/tokenDetails';
// import Approve from '../../../hooks/dataSenders/approve';

const Categories = () => {

    const { account } = useWeb3React();
    const mytoken = localStorage.getItem('mytoken');
    const [loader, setLoader] = useState(false);
    const [allCategories, setAllCategories] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [activeTab, setActiveTab] = useState('link-1');
    const [tokenDetailsArry, setTokenDetailsArry] = useState(null);
    const [addCategories, setAddCategories] = useState(null);
    const [categoriesDelId, setCategoriesDelId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);

    const handleShow2 = (id) => {
        setShow2(true)
        setCategoriesDelId(id);
    }




    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
        setSearchInput("");
    }

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

    const addNewCategories = () => {
        setLoader(true);
        const payload = { name: addCategories };

        axios.post(Environment?.backendUrl + `/launchpadCategory/addLaunchpadCategory`, payload, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                console.log("🚀 ~ .then ~ response:", response)
                setLoader(false);
                handleShow1();
                handleClose();
                setAddCategories(null);
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

    const getAllCategories = () => {
        setLoader(true);
        axios.get(Environment?.backendUrl + `/launchpadCategory/launchpadCategoryListing?limit=${100}&offset=${page}`, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                console.log("🚀 ~ .then ~ response: getAllCategories", response)
                setLoader(false);
                setAllCategories(response?.data?.data)
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

    const delCategories = (id) => {
        // handleShow2();
        // setLoader(true);
        axios.delete(Environment?.backendUrl + `/launchpadCategory/deleteLaunchpadCategory?id=${id}`, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                console.log("🚀 ~ .then ~ response: delCategories", response)
                // console.log("🚀 ~ .then ~ response: getAllCategories", response)
                setLoader(false);
                // setAllCategories(response?.data?.data)
                if (response) {
                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    handleClose2();
                    getAllCategories();
                }
            })
            .catch((err) => {
                setLoader(false);
                toast.error(err.response?.data.message, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <>
            {loader && <Loader />}
            <div className='right'>
                <div className='uppercard'>
                    <div className='iii'>
                        <div className='iiitext'>
                            <h5>Categories</h5>
                            <p>Fund transaction</p>
                        </div>
                        <button onClick={handleShow}>Add Category</button>
                    </div>

                </div>

                <div className='parentcardmain'>
                    <div className='parentmains'>
                    </div>
                    <div className='main-card'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='tblheadss'>
                                    <tr>
                                        <th>Category</th>
                                        <th>Date Added</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allCategories?.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><p className='bold'>{data?.name}</p></td>
                                                    <td><p className='bold'>{changeDateFormate(data?.createdAt)}</p></td>
                                                    <td><button className='del11' onClick={() => handleShow2(data?.id)}>Delete</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <Modal className='addcatogory' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className='muinput'>
                        <div class="material-textfield">
                            <input placeholder="Category" type='text' value={addCategories} onChange={(e) => setAddCategories(e?.target?.value)} />
                            <label>Category</label>
                        </div>

                    </div>
                    <div className='endbyuutons'>
                        <button className='canclelight'>Cancel</button>
                        <button className='savebtns' onClick={() => {
                            addNewCategories();
                        }}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='addcatogory1' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='innercontent'>
                        <img src='\assets\greentick.svg' alt='img' className='img-fluid' />
                        <h3>Category successfully added</h3>
                        <button onClick={handleClose1}>Okay</button>
                    </div>
                </Modal.Body>
            </Modal>


            <Modal className='addcatogory' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>delete category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mainsss'>
                        <img src='\assets\bluemark.svg' alt='img' className='img-fluid' />
                        <p>Are your sure you want to delete this category?</p>
                        <div className='endbyuutons'>
                            <button className='canclelight'>Cancel</button>
                            <button className='savebtns' onClick={() => delCategories(categoriesDelId)}>Yes i’m sure</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Categories