import React, { useState, useEffect } from 'react'
import "./changeandupdate.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../Header/Header';
import axios from 'axios';
import Environment from '../../utils/Environment';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// import { Link, useParams } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
// import Header from '../../Header/Header';
// import Footer from '../../Footer/Footer';
// import Environment from '../../../utils/Environment';
// import { toast } from 'react-toastify';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import Signature from '../../utils/userSign';
import GetSigner from '../../hooks/dataFetchers/getSigner';
import useWeb3 from '../../hooks/useWeb3';
// import Loader from '../../../hooks/loader';
import RichTextEditor from '../Createlaunchpad/RichTextEditor';
import Loader from '../../utils/loader/Loader';

const Changeandupdate = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show0, setShow0] = useState(false);

    const handleClose0 = () => setShow0(false);
    const handleShow0 = () => setShow0(true);

    const mytoken = localStorage.getItem('mytoken');
    const params = useParams();
    const history = useHistory();

    const [loader, setLoader] = useState(false);
    const [projectDetail, setProjectDetail] = useState(null);
    console.log("🚀 ~ Changeandupdate ~ projectDetail:", projectDetail)

    // Web3 ===========================
    const { account } = useWeb3React();
    const web3 = useWeb3();

    // const [id, setId] = useState("");
    // const [userSign, setUsersign] = useState(null);
    const [signDedLine, setSignDedLine] = useState(null);
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState([]);
    // const [startTimeEpoch, setStartTimeEpoch] = useState(null);
    // const [endTimeEpoch, setEndTimeEpoch] = useState(null);
    const [signer, setSigner] = useState(null);
    console.log("🚀 ~ Changeandupdate ~ signer:", signer, account)
    const [editModal, setEditModal] = useState(false);
    const [rejectReason, setRejectReason] = useState(null);

    // Web3 ===========================

    const [show56, setShow56] = useState(false);
    const handleClose56 = () => setShow56(false);
    const handleShow56 = () => setShow56(true);

    const [show55, setShow55] = useState(false);
    const handleClose55 = () => setShow55(false);
    const handleShow55 = () => setShow55(true);

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);

    const [show12, setShow12] = useState(false);
    const handleClose12 = () => setShow12(false);
    const handleShow12 = () => setShow12(true);


    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Allocations states =============================
    const [accessibilityList, setAccessibilityList] = useState([]);

    // 1 Allocations states =============================
    const [numberOfTickets1, setNumberOfTickets1] = useState(null);
    const [totalAllocations1, setTotalAllocations1] = useState(null);
    const [maxTicketsUse1, setMaxTicketsUse1] = useState(null);
    const [accessibilityAry1, setAccessibilityAry1] = useState(null);

    // 2 Allocations states =============================
    const [numberOfTickets2, setNumberOfTickets2] = useState(null);
    const [totalAllocations2, setTotalAllocations2] = useState(null);
    const [maxTicketsUse2, setMaxTicketsUse2] = useState(null);
    const [accessibilityAry2, setAccessibilityAry2] = useState(null);

    // 3 Allocations states =============================
    const [numberOfTickets3, setNumberOfTickets3] = useState(null);
    const [totalAllocations3, setTotalAllocations3] = useState(null);
    const [maxTicketsUse3, setMaxTicketsUse3] = useState(null);
    const [accessibilityAry3, setAccessibilityAry3] = useState(null);

    // Allocations states =============================

    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems2, setSelectedItems2] = useState([]);
    const [selectedItems3, setSelectedItems3] = useState([]);

    const getValue = (newDescription) => {
        setDescription(newDescription);
    };

    const handleItemClick = (item) => {
        // Check if the item is already selected
        if (selectedItems.includes(item)) {
            // If selected, remove it from the array
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
        } else {
            // If not selected, add it to the array
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleItemClick2 = (item) => {
        // Check if the item is already selected
        if (selectedItems2.includes(item)) {
            // If selected, remove it from the array
            setSelectedItems2(selectedItems2.filter(selectedItem => selectedItem !== item));
        } else {
            // If not selected, add it to the array
            setSelectedItems2([...selectedItems2, item]);
        }
    };

    const handleItemClick3 = (item) => {
        // Check if the item is already selected
        if (selectedItems3.includes(item)) {
            // If selected, remove it from the array
            setSelectedItems3(selectedItems3.filter(selectedItem => selectedItem !== item));
        } else {
            // If not selected, add it to the array
            setSelectedItems3([...selectedItems3, item]);
        }
    };

    // get project detail =======================

    const getUpdateprojectDetail = () => {
        setLoader(true);
        axios.get(`${Environment?.backendUrl}/launchpadUpdateHistory/getLaunchpadUpdateHistoryById/${params?.id}`, { headers: { "Authorization": `Bearer ${mytoken}` } })
            .then((response) => {
                console.log("🚀 ~ .then ~ response: getUpdateprojectDetail", response)
                setLoader(false);
                setProjectDetail(response?.data?.data);
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

    // get project detail =======================


    const applicationHandle = () => {
        // setOpen(true);
        axios.get(
            `${Environment.backendUrl}/launchpad/tierAccessibilityList`,
            {
                headers: {
                    "Authorization": `Bearer ${mytoken}`
                }
            }
        )
            .then((response) => {
                console.log("🚀 ~ file: UserDetail.js:111 ~ .then ~ response: rejectApplicationHandle", response);
                // setOpen(false);
                console.log(response.data, 'AccessibilityList');

                if (response) {
                    setAccessibilityList(response?.data?.data);
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
    // console.log(accessibilityList);
    // url: Environment.backendUrl + "/launchpad/rejectLaunchpadApplication?launchpad_id=" + params?.id,

    const rejectedProjectHandle = async () => {
        setLoader(true);
        const config = {
            method: "post",
            url: Environment.backendUrl + `/launchpadUpdateHistory/rejectLaunchpadUpdate?id=${params?.id}&rejectionReason=${rejectReason}`,
            headers: {
                Authorization: "Bearer " + mytoken,
            },
        };
        await axios(config)
            .then((res) => {
                setLoader(false);
                console.log(res?.data?.data, "aabi");
                handleClose0();
                setRejectReason(null);
                toast.success(res?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                history.push("/yourproject/applications");
            })
            .catch((err) => {
                setLoader(false);
                if (err?.response?.status == 501) {
                    history.push("/");
                } else {
                    toast.error(err?.response?.data?.message, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }

            });
    };


    const handleDedlineChange = (value) => {
        // setStartTimeUtc(value);
        // validateStartTime(value);
        // Convert the selected date and time to UTC format
        const selectedDate = new Date(value);
        const utcDate = selectedDate.toISOString();
        setSignDedLine(utcDate);
    };

    const convertUtcToLocal = (utcString) => {
        const localDate = new Date(utcString);
        return localDate.toISOString().slice(0, 16); // Truncate seconds and milliseconds
    };

    // let startepochTime = new Date(detail?.startTime).getTime() / 1000; // Convert milliseconds to seconds
    // let endepochTime = new Date(detail?.endTime).getTime() / 1000; // Convert milliseconds to seconds
    let dedlineepochTime = new Date(signDedLine).getTime() / 1000; // Convert milliseconds to seconds

    const signFun = async () => {
        // handleClose();
        console.log(projectDetail?.launchpad?.startTimeEpoch, projectDetail?.launchpad?.endTimeEpoch, dedlineepochTime, signDedLine, "payload timesss");

        const message = web3.utils.soliditySha3(
            {
                t: "address",
                v: account, // Convert to Wei and remove decimal places
            },
            {
                t: "uint256",
                v: projectDetail?.launchpad?.startTimeEpoch,
            },
            {
                t: "uint256",
                v: projectDetail?.launchpad?.endTimeEpoch,
            },
            {
                t: "address",
                v: projectDetail?.launchpad?.tokenAddress,
                // v: "0xEe81A8b78F19EaEF12d98d97aec95bfBB52C4f62",
            },
            {
                t: "address",
                v: account, // Convert to Wei and remove decimal places
            },
            {
                t: "address",
                v: account, // Convert to Wei and remove decimal places
            },
            {
                t: "uint256",
                v: dedlineepochTime,
            },
        );
        console.log(message, 'sign message');
        let signature = await web3.eth.personal.sign(message, account);
        // if (signature) {
        //     setUsersign(signature);
        //     console.log("🚀 ~ fetchSignnnn ~ signature: start", signature)
        // }

        return signature;
    };

    const approveProjectHandle = async () => {
        console.log("start approve");
        console.log("start approve sign");

        try {
            setLoader(true);
            const signFunres = await signFun();
            console.log("🚀 ~ approveProjectHandle ~ res:", signFunres);
            // console.log("🚀 ~ approveProjectHandle ~ res: userSign stateeee", userSign);

            if (account) {
                if (signFunres) {
                    const payload = {
                        launchpad_id: params?.id,
                        tier1NumberOfTickets: numberOfTickets1,
                        tier1TotalAllocationUsd: totalAllocations1,
                        tier1MaxTicketsUse: maxTicketsUse1,
                        tier1Accessibility: selectedItems,
                        tier2NumberOfTickets: numberOfTickets2,
                        tier2TotalAllocationUsd: totalAllocations2,
                        tier2MaxTicketsUse: maxTicketsUse2,
                        tier2Accessibility: selectedItems2,
                        tier3NumberOfTickets: numberOfTickets3,
                        tier3TotalAllocationUsd: totalAllocations3,
                        tier3MaxTicketsUse: maxTicketsUse3,
                        tier3Accessibility: selectedItems3,
                        adminLaunchpadApprovalAddress: account,
                        RSsignature: signFunres,
                        RSsignatureDeadLine: dedlineepochTime
                    };
                    console.log('approveProjectHandle resssssssssssssssssss');
                    const response = await axios.patch(
                        `${Environment.backendUrl}/launchpadUpdateHistory/approveLaunchpadUpdate?launchpad_id=${params?.id}`,
                        payload,
                        {
                            headers: {
                                Authorization: `Bearer ${mytoken}`
                            }
                        }
                    );

                    console.log("🚀 ~ response:", response);
                    console.log(response.data, "AccessibilityList response.data.msg");

                    if (response) {
                        setLoader(false);
                        handleShow();
                        handleClose1();
                        // toast.success(response?.data?.applicationStatus?.msg, {
                        //     position: "top-center",
                        //     autoClose: 2000
                        // });
                    }

                } else {
                    toast?.error("sign must required");
                    setLoader(false);
                }
            } else {
                setLoader(false);
                toast?.error("Please connect your wallet");
            }
            setLoader(false);
        } catch (error) {
            console.log("🚀 ~ approveProjectHandle ~ error:", error);
            setLoader(false);
            toast.error(error.response?.data.msg || "An error occurred", {
                position: "top-center",
                autoClose: 2000
            });
        }
    };


    // get signer from contract ==============================
    const { getSignerHook } = GetSigner();

    const signerHandle = async () => {
        const res = await getSignerHook();
        console.log(res, "res in sign okokokokokok");
        setSigner(res);
    }

    // get signer from contract ==============================

    useEffect(() => {
        applicationHandle();
    }, []);

    useEffect(() => {
        signerHandle();
    }, [account])

    useEffect(() => {
        getUpdateprojectDetail();
    }, [params?.id])

    return (
        <>
            {loader && <Loader />}
            <Header />
            <section className='mainchange'>
                <div className='custom-container'>
                    <div className='parent'>
                        <div className='left'>
                            <div className='maincard'>
                                <div className='uppertext'>
                                    <h2>Changes and Updates</h2>
                                    <p>Changes on <span>April 22, 2024</span></p>
                                </div>
                                <div className='brdr'></div>
                                <div className='bannertext'>
                                    <h2>Banner image changed</h2>
                                    <button>New</button>
                                    <div className='bannerimage'>
                                        <img src={projectDetail?.launchpad?.projectBanner} alt='img' className='img-fluid mainbann' />
                                    </div>
                                    <button className='red'>Old</button>
                                    <div className='bannerimage'>
                                        <img src={projectDetail?.launchpadUpdateHistory?.projectBanner} alt='img' className='img-fluid mainbann' />
                                    </div>
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Project image changed</h2>
                                        <div className='parentsssss'>
                                            <div className='leftssss'>
                                                <button>New</button>
                                                <img src={projectDetail?.launchpad?.projectLogo} alt='img' className='img-fluid' />
                                            </div>
                                            <div className='rightssss'>
                                                <button>New</button>
                                                <img src={projectDetail?.launchpadUpdateHistory?.projectLogo} alt='img' className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Token Price Changed</h2>
                                        <div className='parentsssss'>
                                            <div className='leftssss'>
                                                <button>New</button>
                                                <h3 className='fornum'>${projectDetail?.launchpad?.publicSalePrice} USD</h3>
                                            </div>
                                            <div className='rightssss'>
                                                <button>New</button>
                                                <h3 className='fornum'>${projectDetail?.launchpadUpdateHistory?.publicSalePrice} USD</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='brdr'></div>
                                    <h2>Team Experience and Background: Updated</h2>
                                    <button>New</button>
                                    <div dangerouslySetInnerHTML={{ __html: projectDetail?.launchpad?.teamExperienceAndBackground }} />

                                    {/* <ul>
                                        <li>
                                            Alex Johnson, CEO: Over a decade of experience in logistics and supply chain management, with a strong background in strategic planning and business development.
                                        </li>
                                        <li>
                                            Maria Chen, CTO: Renowned for her expertise in blockchain technology, particularly in developing blockchain solutions for enterprise applications.</li>
                                        <li>
                                            Raj Patel, CFO: Brings extensive experience in financial management and venture capital, specializing in fintech and blockchain startups.
                                        </li>
                                        <li>

                                            Sophia Rodriguez, COO: Expert in operational efficiency and process optimization, with a focus on integrating blockchain technology into traditional supply chain processes.
                                        </li>
                                        <li>

                                            Liam Smith, CMO: Skilled in digital marketing and brand strategy, with a track record of successful marketing campaigns in tech and blockchain sectors.
                                        </li>
                                        <li>

                                            Emily Wang, CPO (Chief Product Officer): Experienced in product development and management, particularly in software and blockchain-based applications.
                                        </li>
                                        <li>
                                            Jordan Lee, CSO (Chief Strategy Officer): Specializes in corporate strategy with an emphasis on emerging technologies and market expansion strategies in the blockchain industry.
                                        </li>
                                        <li>

                                            Anita Desai, CCO (Chief Compliance Officer): Expert in regulatory compliance and legal frameworks, ensuring the company adheres to global blockchain and data protection regulations.
                                        </li>
                                    </ul> */}
                                    <button className='red'>old</button>
                                    <div dangerouslySetInnerHTML={{ __html: projectDetail?.launchpadUpdateHistory?.teamExperienceAndBackground }} />

                                    {/* <ul>
                                        <li>
                                            Alex Johnson, CEO: Over a decade of experience in logistics and supply chain management, with a strong background in strategic planning and business development.
                                        </li>
                                        <li>

                                            Maria Chen, CTO: Renowned for her expertise in blockchain technology, particularly in developing blockchain solutions for enterprise applications.
                                        </li>
                                        <li>

                                            Raj Patel, CFO: Brings extensive experience in financial management and venture capital, specializing in fintech and blockchain startups.
                                        </li>
                                        <li>

                                            Sophia Rodriguez, COO: Expert in operational efficiency and process optimization, with a focus on integrating blockchain technology into traditional supply chain processes.
                                        </li>
                                        <li>

                                            Liam Smith, CMO: Skilled in digital marketing and brand strategy, with a track record of successful marketing campaigns in tech and blockchain sectors.
                                        </li>
                                        <li>
                                            Emily Wang, CPO (Chief Product Officer): Experienced in product development and management, particularly in software and blockchain-based applications.</li>
                                    </ul> */}
                                    <div className='brdr'></div>
                                    <div className='bannertext'>
                                        <h2>Partnerships and Collaborations: Updated</h2>
                                        <button>New</button>
                                        {/* <p className='para'>We've partnered with logistics companies like FastTrack Logistics and retail giants like RetailCorp to enhance our platform's utility and credibility. We're also part of the Blockchain in Transport Alliance (BiTA).</p>
                                        <div className='bannerimage forhight'>
                                            <img src='\assets\mmmmmm.svg' alt='img' className='img-fluid mainbann' />
                                        </div> */}
                                        <div dangerouslySetInnerHTML={{ __html: projectDetail?.launchpad?.partnershipAndCollaborations }} />
                                        <button className='red'>Old</button>
                                        <div dangerouslySetInnerHTML={{ __html: projectDetail?.launchpadUpdateHistory?.partnershipAndCollaborations }} />
                                        {/* <p className='para'>We've partnered with logistics companies like FastTrack Logistics and retail giants like RetailCorp to enhance our platform's utility and credibility. We're also part of the Blockchain in Transport Alliance (BiTA).</p>
                                        <div className='bannerimage forhight'>
                                            <img src='\assets\mmmmmm.svg' alt='img' className='img-fluid mainbann' />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <div className="maincardcontact">
                                <h2>Contact Information</h2>
                                <div className="brdr"></div>
                                <div className='rightparents'>
                                    <p>Contact Name:</p>
                                    <h6>Patrick Murphy</h6>
                                </div>
                                <div className='rightparents'>
                                    <p>Contact Telegram:</p>
                                    <h6>{projectDetail?.launchpadTelegram}</h6>
                                </div>
                                <div className='rightparents'>
                                    <p>Contact Email:</p>
                                    <h6>patrickmurphy@gmail.com</h6>
                                </div>
                            </div>
                            {/* <button className='staking' >Tier & Staking Settings</button> */}
                            <button className='staking' onClick={handleShow12}>Tier & Staking Settings</button>

                            <div className='endtwicebtns'>
                                {/* <button className='reject' onClick={handleShow}>Reject</button> */}
                                {/* <button className='approve'>Reject</button> */}
                                {/* () => rejected() */}
                                <button className='reject' onClick={() => handleShow0()}>Reject</button>
                                {console.log(projectDetail?.launchpad?.launchpadApplicationStatus, 'statusss')}
                                {
                                    signer == account ?
                                        <>
                                            {projectDetail?.launchpad?.launchpadApplicationStatus == 'approve' ? (
                                                <button className='approve' disabled style={{ cursor: "not-allowed" }}>Approved</button>
                                            ) : projectDetail?.launchpad?.launchpadApplicationStatus == 'pending' ? (
                                                <button className='approve' onClick={handleShow1}>Approve</button>
                                            ) : projectDetail?.launchpad?.launchpadApplicationStatus == 'rejected' ? (
                                                <button className='reject' disabled style={{ cursor: "not-allowed" }}>Rejected</button>
                                            ) : (
                                                <button className='reject' disabled style={{ cursor: "not-allowed" }}>Not illegible to approve</button>
                                            )}

                                        </>
                                        : "You are not illegible to approve"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rejection resion */}
            <Modal className='rejectmodal' show={show0} onHide={handleClose0}>
                <Modal.Header closeButton>
                    <Modal.Title>Reject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='headingmodal'>State reason for rejecting this entry. The owner will get a notification promltly.</h2>
                    <p className='reason'>Rejection Reason</p>
                    <div className='uuuuu'>
                        <textarea type="text" placeholder='Start writing here...' value={rejectReason} onChange={(e) => setRejectReason(e?.target?.value)} />
                    </div>
                    <div className='twicebuttonss'>
                        <button className='cancle' >Cancel</button>
                        <button className='Submit' onClick={() => rejectedProjectHandle()}>Submit</button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Rejection resion */}

            {/* Allocation Settings modal */}

            <Modal className='settingmodal' show={show11} onHide={handleClose11} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Allocation Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 1 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" value={numberOfTickets1} onChange={(e) => setNumberOfTickets1(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" value={totalAllocations1} onChange={(e) => setTotalAllocations1(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" value={maxTicketsUse1} onChange={(e) => setMaxTicketsUse1(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        {/* <div>
                            <h1>Select Fruits</h1>
                            <pre>{JSON.stringify(selected)}</pre>
                            <MultiSelect
                                options={accessibilityList}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </div> */}
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>Accessibility</label>
                                        </div>
                                    </div>
                                    <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Premium Members</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">All Stakers</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Legend Staker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Diamond Staker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Platinum Staker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Gold Staker</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 2 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" value={numberOfTickets2} onChange={(e) => setNumberOfTickets2(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" value={totalAllocations2} onChange={(e) => setTotalAllocations2(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" value={maxTicketsUse2} onChange={(e) => setMaxTicketsUse2(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>Accessibility</label>
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
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 3 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" value={numberOfTickets3} onChange={(e) => setNumberOfTickets3(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" value={totalAllocations3} onChange={(e) => setTotalAllocations3(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" value={maxTicketsUse3} onChange={(e) => setMaxTicketsUse3(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>Accessibility</label>
                                        </div>
                                    </div>
                                    <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">All Stakers</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Legend Staker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Diamond Staker</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    {/* <input type='datetime-local' value={signDedLine ? convertUtcToLocal(signDedLine) : ""} onChange={(e) => handleDedlineChange(e.target.value)} /> */}
                    <div className='endbtns'>
                        <button className='cancle'>Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleShow();
                            handleClose11();
                        }}>Confirm</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Success modal */}

            <Modal className='participatemodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p>Application approved Successfully</p>
                        <button onClick={handleClose}>Okay</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Tier Summery modal */}

            <Modal className='summerymodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Tier Summery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='main-card'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='tblheadss'>
                                    <tr>
                                        <th>Tier</th>
                                        <th>No. of Tickets</th>
                                        <th>Total Allocation</th>
                                        <th>Accessibility</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p className='bolds'>1</p></td>
                                        <td><p className='bolds'>{numberOfTickets1}</p></td>
                                        <td><p className='bolds'>${totalAllocations1}</p></td>
                                        <td><p className='bolds'>All Stakers & Premium Member</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='bolds'>2</p></td>
                                        <td><p className='bolds'>{numberOfTickets2}</p></td>
                                        <td><p className='bolds'>${totalAllocations2}</p></td>
                                        <td><p className='bolds'>All Stakers & Premium Member</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className='bolds'>3</p></td>
                                        <td><p className='bolds'>{numberOfTickets3}</p></td>
                                        <td><p className='bolds'>${totalAllocations3}</p></td>
                                        <td><p className='bolds'>All Stakers & Premium Member</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='endbtns'>
                        <button className='cancle'>Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleShow12();
                            handleClose1();
                            setEditModal(true);
                        }}>Edit</button>
                        <button className='confirm' onClick={() => approveProjectHandle()}>Approve</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Allocation modal */}

            <Modal className='settingmodal' show={show12} onHide={handleClose12} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{editModal ? "Edit" : null} Allocation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 1 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" value={numberOfTickets1} onChange={(e) => setNumberOfTickets1(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" value={totalAllocations1} onChange={(e) => setTotalAllocations1(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" value={maxTicketsUse1} onChange={(e) => setMaxTicketsUse1(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>{selectedItems.length > 0 ? `Accessibility: ${selectedItems.join(', ')}` : 'Accessibility'}</label>
                                        </div>
                                    </div>
                                    <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {accessibilityList?.map((item, index) => {
                                        return (
                                            <>
                                                <Dropdown.Item key={index} onClick={() => handleItemClick(item.accesibilityName)}>{item?.accesibilityName}</Dropdown.Item>
                                            </>
                                        )
                                    })}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 2 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" value={numberOfTickets2} onChange={(e) => setNumberOfTickets2(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" value={totalAllocations2} onChange={(e) => setTotalAllocations2(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" value={maxTicketsUse2} onChange={(e) => setMaxTicketsUse2(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>                                            <label>{selectedItems2.length > 0 ? `Accessibility: ${selectedItems2.join(', ')}` : 'Accessibility'}</label>
                                            </label>
                                        </div>
                                    </div>
                                    <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {accessibilityList?.map((item, index) => {
                                        return (
                                            <>
                                                <Dropdown.Item key={index} onClick={() => handleItemClick2(item.accesibilityName)}>{item?.accesibilityName}</Dropdown.Item>
                                            </>
                                        )
                                    })}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2>tier 3 allocations</h2>
                        </div>
                        <div className='parentsetting'>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter no. of Tickets" type="number" min="0" s value={numberOfTickets3} onChange={(e) => setNumberOfTickets3(e?.target?.value)} />
                                    <label>Number of Tickets</label>
                                </div>
                            </div>
                            <div className='muinput'>
                                <div class="material-textfield">
                                    <input placeholder="Enter Total Allocation" type="number" min="0" s value={totalAllocations3} onChange={(e) => setTotalAllocations3(e?.target?.value)} />
                                    <label>Total Allocation (USD)</label>
                                </div>
                            </div>
                        </div>
                        <div className='muinput'>
                            <div class="material-textfield">
                                <input placeholder="Enter Ticket amount" type="number" min="0" s value={maxTicketsUse3} onChange={(e) => setMaxTicketsUse3(e?.target?.value)} />
                                <label>Max Ticket Use</label>
                            </div>
                        </div>
                        <div className='dropbtn'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className='muinput'>
                                        <div class="material-textfield">
                                            <input placeholder="Select Accessibility" type="text" />
                                            <label>                                            <label>{selectedItems3.length > 0 ? `Accessibility: ${selectedItems3.join(', ')}` : 'Accessibility'}</label>
                                            </label>
                                        </div>
                                    </div>
                                    <img src='\assets\Vector.png' alt='img' className='img-fluid' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {accessibilityList?.map((item, index) => {
                                        return (
                                            <>
                                                <Dropdown.Item key={index} onClick={() => handleItemClick3(item.accesibilityName)}>{item?.accesibilityName}</Dropdown.Item>
                                            </>
                                        )
                                    })}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    {/* <p>Sign deadline</p> */}
                    <div className='uppersettingparent'>
                        <div className='heading'>
                            <h2 style={{ textTransform: "capitalize" }}>Application Deployment Signature Deadline</h2>
                        </div>
                        <input type='datetime-local' className='form-control' value={signDedLine ? convertUtcToLocal(signDedLine) : ''} onChange={(e) => handleDedlineChange(e.target.value)} />
                    </div>

                    <div className='endbtns'>
                        <button className='cancle' onClick={handleClose12}>Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleClose12();
                            handleShow1();
                        }}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Update modal */}
            <Modal className='participatemodal' show={show55} onHide={handleClose55} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='leftcczxcxzc'>
                        <div className='innerrightxzcxzc'>
                            <img src='\assets\presale.png' alt='img' className='img-fluid' />
                        </div>
                        <div className='innerleft'>
                            <h4>Eclipsefi</h4>
                            <p>20 Nov, 2023</p>
                        </div>
                    </div>
                    <h6 className="verifyhead"> Description</h6>
                    <div>
                        <RichTextEditor initialValue={description} getValue={getValue} />
                    </div>
                    <div className='endbtns'>
                        <button className='cancle'>Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleShow56();
                            handleClose55();
                        }}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Changeandupdate