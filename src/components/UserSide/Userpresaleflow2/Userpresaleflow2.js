import React, { useEffect, useState } from 'react'
import "./userpresaleflow.scss"
import { Nav } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RichTextEditor from './RichTextEditor';
import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import Signature from '../../../utils/userSign';
import GetSigner from '../../../hooks/dataFetchers/getSigner';
import useWeb3 from '../../../hooks/useWeb3';
import Loader from '../../../hooks/loader';


const Userpresaleflow2 = () => {

    const web3 = useWeb3();
    // let { id } = useParams();

    const history = useHistory();
    const token = localStorage.getItem('mytoken');

    const [loader, setLoader] = useState(false);
    const [userSign, setUsersign] = useState(null);
    const [signDedLine, setSignDedLine] = useState(null);
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState([]);
    const [startTimeEpoch, setStartTimeEpoch] = useState(null);
    const [endTimeEpoch, setEndTimeEpoch] = useState(null);
    const [signer, setSigner] = useState(null);
    const [editModal, setEditModal] = useState(false);


    const [id, setId] = useState("");
    const getValue = (newDescription) => {
        setDescription(newDescription);
    };
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }

    // Web3 ===========================
    const { account } = useWeb3React();


    // Web3 ===========================

    const [show56, setShow56] = useState(false);
    const handleClose56 = () => setShow56(false);
    const handleShow56 = () => setShow56(true);

    const [show55, setShow55] = useState(false);
    const handleClose55 = () => setShow55(false);
    const handleShow55 = () => setShow55(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


    const applicationHandle = () => {
        // setOpen(true);
        axios.get(
            `${Environment.backendUrl}/launchpad/tierAccessibilityList`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
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

    const rejected = async () => {

        const config = {
            method: "patch",
            url: Environment.backendUrl + "/launchpad/rejectLaunchpadApplication?launchpad_id=" + id,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                toast.success(res?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                history.push("/yourproject/applications");
            })
            .catch((err) => {
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

    const getApplicationDetails = async () => {

        const config = {
            method: "get",
            url: `${Environment.backendUrl}/launchpad/getLaunchpadById/${id}`,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                setDetail(res?.data?.data);
                const startTime = Date.parse(res?.data?.data?.startTime);
                setStartTimeEpoch(startTime);
                const endTime = Date.parse(res?.data?.data?.endTime);
                setEndTimeEpoch(endTime);
            })
            .catch((err) => {
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

    let startepochTime = new Date(detail?.startTime).getTime() / 1000; // Convert milliseconds to seconds
    let endepochTime = new Date(detail?.endTime).getTime() / 1000; // Convert milliseconds to seconds
    let dedlineepochTime = new Date(signDedLine).getTime() / 1000; // Convert milliseconds to seconds

    const signFun = async () => {
        // handleClose();
        // console.log(detail?.startTimeEpoch, detail?.endTimeEpoch, dedlineepochTime, signDedLine, "payload timesss");

        const message = web3.utils.soliditySha3(
            {
                t: "address",
                v: detail?.tokenSender, // Convert to Wei and remove decimal places
            },
            {
                t: "uint256",
                v: detail?.startTimeEpoch,
            },
            {
                t: "uint256",
                v: detail?.endTimeEpoch,
            },
            {
                t: "address",
                v: detail?.tokenAddress,
                // v: "0xEe81A8b78F19EaEF12d98d97aec95bfBB52C4f62",
            },
            {
                t: "address",
                v: detail?.tokenSender, // Convert to Wei and remove decimal places
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
        console.log(message);
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
                        launchpad_id: id,
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
                    const response = await axios.post(
                        `${Environment.backendUrl}/launchpad/approveLaunchpadApplication`,
                        payload,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
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
        var val = window.location.href;
        val = new URL(val);
        setId(val.searchParams.get("id"));
        localStorage.setItem("currentId", val.searchParams.get("id"));
        // window.scroll(0, 0);
        if (id) {
            getApplicationDetails();
        }
    }, [id]);



    useEffect(() => {
        signerHandle();
    }, [account])
    return (
        <>
            {loader && <Loader />}
            <Header />
            <section className='mainpresaleuser'>
                <div className="custom-container">
                    <div className='parentdetail'>
                        <div className='left'>
                            <div className='mainssss'>
                                <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Information</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Tokenomics</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">
                                            Updates
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-4">
                                            Summery
                                        </Nav.Link>
                                    </Nav.Item>


                                </Nav>

                            </div>
                            {activeTab === 'link-1' && (
                                <>
                                    <div className='detailimage'>
                                        <img src={detail?.projectBanner} alt='img' className='img-fluid images' />
                                    </div>
                                    <div className='card'>
                                        <div className='innercontent'>
                                            <div className='left'>
                                                <div className='innerright'>
                                                    <img src={detail?.projectLogo} alt='img' className='img-fluid' />
                                                </div>
                                                <div className='innerleft'>
                                                    <h4>{detail?.projectName}</h4>
                                                    <p>{detail?.tokenName}</p>
                                                    <div className='parentsocial'>
                                                        <div className='social'>
                                                            <img src='\assets\twitter.svg' alt='img' className='img-fluid' />
                                                            <img src='\assets\telegram.svg' alt='img' className='img-fluid' />
                                                            <img src='\assets\instagram.svg' alt='img' className='img-fluid' />
                                                            <img src='\assets\Discord.svg' alt='img' className='img-fluid' />

                                                            <img src='\assets\reddit.svg' alt='img' className='img-fluid' />
                                                        </div>

                                                        <div className='buttonsss'>
                                                            <button>Website</button>
                                                            <button>Whitepaper</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className='right ggg'>
                                                <h6>Rating</h6>
                                                <p><img src='\assets\Star.png' alt='img' className='img-fluid' />4.8</p>
                                            </div> */}
                                        </div>
                                        <div className='secondcard'>
                                            <div className='textcard'>
                                                <p>Token Price</p>
                                                <h6>${detail?.publicSalePrice}</h6>
                                            </div>
                                            <div className='textcard'>
                                                <p>Soft Cap</p>
                                                <h6>{detail?.softCap} USDT</h6>
                                            </div>
                                            <div className='textcard'>
                                                <p>Hard Cap</p>
                                                <h6>{detail?.hardCap} USDT</h6>
                                            </div>
                                            <div className='textcard'>
                                                <p>GOAL</p>
                                                <h6>$0.02</h6>
                                            </div>
                                            <div className='textcard'>
                                                <p>Network</p>
                                                <h6>BSC Chain</h6>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='infocard'>
                                        <div className='mainheading'>
                                            <h2>Project Vision and Use Case:</h2>
                                            <p>ChainSolve aims to revolutionize the supply chain industry by leveraging blockchain technology to enhance transparency, efficiency, and traceability. Our platform addresses the need for real-time tracking of goods, reducing losses due to counterfeit products and inefficiencies in logistics.</p>
                                        </div>
                                        <div className='roadmap'>
                                            <h2>Roadmap and Milestones:</h2>
                                            <div className='roadmap'>
                                                <img src='\assets\road.svg' alt='img' className='img-fluid roadimg' />
                                            </div>
                                        </div>
                                        <div className='roadmap'>
                                            <h2>Team Experience and Background:</h2>
                                            <ul>
                                                <li>
                                                    <p>Alex Johnson, CEO: Over a decade of experience in logistics and supply chain management, with a strong background in strategic planning and business development.</p>
                                                </li>
                                                <li>
                                                    <p>Maria Chen, CTO: Renowned for her expertise in blockchain technology, particularly in developing blockchain solutions for enterprise applications.</p>
                                                </li>
                                                <li>
                                                    <p>Raj Patel, CFO: Brings extensive experience in financial management and venture capital, specializing in fintech and blockchain startups.</p>
                                                </li>
                                                <li>
                                                    <p>Sophia Rodriguez, COO: Expert in operational efficiency and process optimization, with a focus on integrating blockchain technology into traditional supply chain processes.</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Liam Smith, CMO: Skilled in digital marketing and brand strategy, with a track record of successful marketing campaigns in tech and blockchain sectors.</p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Emily Wang, CPO (Chief Product Officer): Experienced in product development and management, particularly in software and blockchain-based applications.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Jordan Lee, CSO (Chief Strategy Officer): Specializes in corporate strategy with an emphasis on emerging technologies and market expansion strategies in the blockchain industry.</p>
                                                </li>
                                                <li>
                                                    <p>Anita Desai, CCO (Chief Compliance Officer): Expert in regulatory compliance and legal frameworks, ensuring the company adheres to global blockchain and data protection regulations.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Tokenomics and Utility:</h2>
                                            <p className='paraa'>ChainSolve's token, CSOLV, has a capped supply of 100 million tokens. It's used for transaction fees, staking, and rewarding participants in our network. We've designed a deflationary model where a small percentage of tokens are burned with each transaction, ensuring long-term value.</p>
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Market Analysis, Target Audience, and Go-to-Market Strategy:</h2>
                                            <p className='paraa'>Our target audience includes logistics companies, manufacturers, and retailers. The global supply chain market is valued at over $10 trillion, offering immense potential. Our differentiation lies in our specialized blockchain solution tailored for supply chain complexities. Our go-to-market strategy involves direct partnerships, digital marketing campaigns, and participation in industry conferences to acquire and retain users.</p>
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Regulatory Compliance:</h2>
                                            <p className='paraa'>We comply with all relevant regulations, including GDPR for data protection and anti-money laundering directives. We're actively monitoring evolving blockchain regulations to anticipate future compliance needs.</p>
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Partnerships and Collaborations:</h2>
                                            <p className='paraa'>We've partnered with logistics companies like FastTrack Logistics and retail giants like RetailCorp to enhance our platform's utility and credibility. We're also part of the Blockchain in Transport Alliance (BiTA).</p>
                                            <img src='\assets\partner.svg' alt='img' className='img-fluid partner' />
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Financial Health and Funding:</h2>
                                            <p className='paraa'>ChainSolve successfully raised $5 million in our Series A funding round, led by TechVentures Capital. This funding has been instrumental in our platform development and marketing initiatives. We're planning a Series B round in late 2023 to fuel our next growth phase.</p>
                                        </div>
                                        <div className='mainheading'>
                                            <h2>Community and Ecosystem Engagement:</h2>
                                            <p className='paraa'>We actively engage with our community through social media, webinars, and our dedicated support forum. We regularly update our stakeholders with newsletters and have a feedback integration mechanism in our platform for continuous improvement based on user input.</p>
                                        </div>
                                    </div>
                                    <div className='tokencard'>
                                        <h2 className='head'>Token Sale and Economics</h2>
                                        <div className='parenttokencard'>
                                            <div className='graycard forraius'>
                                                <p className='graytext'>Hard Cap</p>
                                            </div>
                                            <div className='graycard forraius1'>
                                                <p className=''>{detail?.hardCap} USD</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Soft Cap</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.softCap} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Total Token Supply</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.totalTokenSupply} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Initial Circulating Supply</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>15% of Total Token Supply</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Public Sale Token Price</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.publicSalePrice} USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Tokens Offered</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.tokensOffered} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Hard Cap Per User</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.hardcapPerUser} USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Token Sale Vesting Period</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.tokenSaleVestingPeriod}</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Token Type</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>ERC20</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard forraius2'>
                                                <p className='graytext'>Token Distribution</p>
                                            </div>
                                            <div className='graycard forraius3'>
                                                <p className=''>After the end of token sale</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === 'link-2' && (
                                <>
                                    <div className='tokenutility'>
                                        <h2 className='mainhead'>FLOWX'S TOKEN UTILITIES</h2>
                                        <ul>
                                            <li>
                                                <p>FLX serves as the native token of FlowX, used for enhancing liquidity and marketing purposes.</p>
                                            </li>
                                            <li>
                                                <p>xFLX (escrowed token of FLX) is used for various utilities like Boosting Yield, Receiving Dividend, Governing FlowX, etc. for long-tern holders.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='tokencard'>
                                        <h2 className='head'>Token Sale and Economics</h2>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Hard Cap</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.hardCap} USD</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Soft Cap</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.softCap} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Total Token Supply</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.totalTokenSupply} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Initial Circulating Supply</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>15% of Total Token Supply</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Public Sale Token Price</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.publicSalePrice} USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Tokens Offered</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.tokensOffered} FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Hard Cap Per User</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>{detail?.hardcapPerUser} USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Token Sale Vesting Period</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>{detail?.tokenSaleVestingPeriod}</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Token Type</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>ERC20</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Token Distribution</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>After the end of token sale</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tokencard'>
                                        <h2 className='head'>Token Release Schedule</h2>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Seed</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Private</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Public IDO</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Marketing</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Ecosystem</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Team</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Advisors/Partnerships</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'> Foundation</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Airdrops</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>0% at TGE, 1 Month cliff, then 10% Monthly</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === 'link-3' && (
                                <>
                                    <div className='projectparentsss'>
                                        <h2>Project Milestones</h2>
                                        <div className='mainprojectcard'>

                                            <div className='parent'>

                                                <div className='left'>
                                                    <img src='\assets\Frame167.png' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h6>Completion of our whitepaper and initial team assembly.</h6>
                                                    <p>Q4 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainprojectcard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <img src='\assets\Frame167.png' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h6>Development of our MVP and first partnerships with logistics companies.</h6>
                                                    <p>Q3 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainprojectcard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <img src='\assets\Frame167.png' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h6>Full platform launch in Q3 2023, followed by expansion to additional markets.</h6>
                                                    <p>Q1 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='card forpad'>
                                        <div className='llatestpdates'>
                                            <h5 className='cccccccccczzzzzz'>
                                                Latest Updates
                                            </h5>

                                            <button className='ccreatepdate' onClick={handleShow55}  >
                                                Create Update
                                            </button>
                                            {/* <button className='ccreatepdatePending'>
                                            Pending Approve
                                            </button> */}



                                        </div>
                                        <div className='parentssssss'>
                                            <div className='innercontent'>
                                                <div className='left'>
                                                    <div className='innerright'>
                                                        <img src='\assets\presale.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='innerleft'>
                                                        <h4>FlowX_Official</h4>
                                                        <p>20 Nov, 2023</p>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='bottomcontentss'>
                                                <p className='officialflow'>Ut omnis suscipit aut exercitationem eius qui cumque ullam qui sunt nihil sit quam consequuntur non odio odio et corrupti velit. Est consequuntur quasi a blanditiis laboriosam et dicta fugit ea nihil earum.</p>
                                                <p className='officialflow'>
                                                    #FLOWX #Crypto #Blockchain #Token</p>
                                                <img src='\assets\enchanc.png' alt='img' className='img-fluid' />
                                            </div>
                                        </div>


                                    </div>
                                </>
                            )}
                            {activeTab === 'link-4' && (
                                <>
                                    <div className='summerycard'>
                                        <div className='summeryparent'>
                                            <p>Amount to raise (USD)</p>
                                            <h6>{detail?.amountToRise ? detail?.amountToRise : 0}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Token Address</p>
                                            <h6>{detail?.tokenAddress}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Project Name</p>
                                            <h6>{detail?.projectName}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Token Symbol</p>
                                            <h6>{detail?.tokenSymbol}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Token decimals</p>
                                            <h6>{detail?.tokenDecimals}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Presale Rate</p>
                                            <h6>{detail?.presaleRate ? detail?.presaleRate : 0}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Listing Rate</p>
                                            <h6>{detail?.listingRate ? detail?.listingRate : 0}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Softcap (USD)</p>
                                            <h6>{detail?.softCap}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Hardcap (USD)</p>
                                            <h6>{detail?.hardCap}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Start time</p>
                                            <h6>{detail?.startTime} (UTC)</h6>
                                        </div>

                                        <div className='summeryparent'>
                                            <p>End time</p>
                                            <h6>{detail?.endTime}  (UTC)</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Website</p>
                                            <h6>https://www.presaletoken.io/</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Facebook</p>
                                            <h6>{detail?.launchpadFacebook}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Twitter</p>
                                            <h6>{detail?.launchpadTwitter}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Github</p>
                                            <h6>{detail?.launchpadGithub}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Telegram</p>
                                            <h6>{detail?.launchpadTelegram}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Instagram</p>
                                            <h6>{detail?.launchpadInstagram}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Discord</p>
                                            <h6>{detail?.launchpadDiscord}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Reddit</p>
                                            <h6>{detail?.launchpadReddit}</h6>
                                        </div>
                                        <div className='summeryparent'>
                                            <p>Medium</p>
                                            <h6>{detail?.launchpadMedium}</h6>
                                        </div>
                                        <div className='endboxx'>
                                            <p>Warning: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className='right gggg'>
                            <div className='contactcard'>
                                <h2>Contact Information</h2>
                                <div className='brdr'></div>
                                <div className='parentpara'>
                                    <p>Contact Name:<span>Patrick Murphy</span></p>
                                    <p>Contact Telegram:<span>https://t.me/patrickmurphy</span></p>
                                    <p>Contact Email:<span>patrickmurphy@gmail.com</span></p>
                                </div>

                            </div>
                            <div className='buttonsss'>
                                <button onClick={handleShow12}>Tier & Staking Settings</button>
                                <div className='innerbtn'>
                                    <button className='block' onClick={() => rejected()}>Reject</button>
                                 { signer == account ?
                                            <>
                                                {detail?.launchpadApplicationStatus == 'approve' ? (
                                                    <button className='release' disabled style={{ cursor: "not-allowed" }}>Approved</button>
                                                ) : detail?.launchpadApplicationStatus == 'pending' ? (
                                                    <button className='release' onClick={handleShow1}>Approve</button>
                                                ) : detail?.launchpadApplicationStatus == 'rejected' ? (
                                                    <button className='block' disabled style={{ cursor: "not-allowed" }}>Rejected</button>
                                                ) : (
                                                    <button className='block' disabled style={{ cursor: "not-allowed" }}>Not illegible to approve</button>
                                                )}

                                            </>
                                            : "You are not illegible to approve"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
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

            <Modal className='participatemodal' show={show56} onHide={handleClose56} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p>your Feedback submitted successfully</p>
                        <button className='confirm' >Save</button>
                    </div>
                </Modal.Body>
            </Modal>



        </>
    )
}

export default Userpresaleflow2