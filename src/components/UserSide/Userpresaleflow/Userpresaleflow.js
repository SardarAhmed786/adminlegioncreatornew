import React, { useEffect, useState } from 'react'
import "./userpresaleflow.scss"
import { Nav } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Environment from '../../../utils/Environment';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from '../../Footer/Footer';
const Userpresaleflow = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }
    const [timeshow, setTimeshow] = useState(false);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const time = new Date("mar 30, 2024 08:00:00");
            const diff = time.getTime() - now.getTime();
            if (diff <= 0) {
                clearInterval(interval);
                setTimeshow(true);
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);
            setDay(days);
            setHour(hours);
            setMin(mins);
            setSec(secs);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const history = useHistory();
    const token = localStorage.getItem('mytoken');
    const [id, setId] = useState("");
    const [detail, setDetail] = useState([]);
    
    const getUpdateDetail = async () => {

        const config = {
            method: "get",
            url:  Environment.backendUrl + "/launchpad/getLaunchpadById/" + id ,
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        await axios(config)
            .then((res) => {
                console.log(res?.data?.data, "aabi");
                setDetail(res?.data?.data);
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



    const blocked = async () => {

        const config = {
            method: "patch",
            url:  Environment.backendUrl + "/launchpad/blockLaunchpad?launchpad_id=" + id ,
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
                history.push("/yourproject/projects");
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

    useEffect(() => {
        var val = window.location.href;
        val = new URL(val);
        setId(val.searchParams.get("id"));
        localStorage.setItem("currentId", val.searchParams.get("id"));
        // window.scroll(0, 0);
        if (id) {
            getUpdateDetail();
        }
    }, [id]);

    return (
        <>
            <Header />
            <section className='mainpresaleusersss'>
                <div className="custom-container">
                    <div className='detailimage maindetail'>
                        <img src={detail?.projectBanner} alt='img' className='img-fluid images' />
                    </div>
                    <div className='parentdetail'>
                        <div className='left'>
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
                                    <div className='right ggg'>
                                        <h6>Rating</h6>
                                        <p><img src='\assets\Star.png' alt='img' className='img-fluid' />4.8</p>
                                    </div>
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
                                {/* <h4 className='allocation'>ALLOCATION</h4>
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
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        200
                                                    </td>
                                                    <td>
                                                        $20,000
                                                    </td>
                                                    <td>
                                                        All Stakers & Premium Member
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        200
                                                    </td>
                                                    <td>
                                                        $20,000
                                                    </td>
                                                    <td>
                                                        All Stakers & Premium Member
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        200
                                                    </td>
                                                    <td>
                                                        $20,000
                                                    </td>
                                                    <td>
                                                        All Stakers & Premium Member
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        200
                                                    </td>
                                                    <td>
                                                        $20,000
                                                    </td>
                                                    <td>
                                                        All Stakers & Premium Member
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> */}
                            </div>
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
                                            Live Pitch
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-5">
                                            Ratings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                            </div>
                            {activeTab === 'link-1' && (
                                <>
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
                                                <p className=''>{detail?.hardCap}USD</p>
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
                                                <p className=''>{detail?.publicSalePrice}USD (price in USDT will be determined prior to the start of subscription)</p>
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
                                                <p className=''>{detail?.hardcapPerUser}(price in USDT will be determined prior to the start of subscription)</p>
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
                                                <p className='graytext '>Token Distribution</p>
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
                                            <div className='graycard forraius'>
                                                <p className='graytext'>Hard Cap</p>
                                            </div>
                                            <div className='graycard forraius1'>
                                                <p className=''>{detail?.hardCap}USD</p>
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
                                                <p className=''>{detail?.publicSalePrice}USD (price in USDT will be determined prior to the start of subscription)</p>
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
                                                <p className=''>{detail?.hardcapPerUser}(price in USDT will be determined prior to the start of subscription)</p>
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
                                                <p className='graytext '>Token Distribution</p>
                                            </div>
                                            <div className='graycard forraius3'>
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
                                    <div className='projectmilestone'>
                                        <h2>Project Milestones</h2>
                                        <div className='mainprojectcard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <img src='\assets\Frame166.png' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h6>Completion of our whitepaper and initial team assembly.</h6>
                                                    <p>Completed on: June 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainprojectcard'>
                                            <div className='parent'>
                                                <div className='left'>
                                                    <img src='\assets\Frame166.png' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='right'>
                                                    <h6>Completion of our whitepaper and initial team assembly.</h6>
                                                    <p>Completed on: June 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainprojectcard1'>
                                            <div className='parentcard'>
                                                <div className='left'>
                                                    <img src='\assets\Frame167.png' alt='img' className='img-fluid' />
                                                    <div className='cardtext'>
                                                        <h6>Launch of our beta platform.</h6>
                                                        <p>Q1 2024</p>
                                                    </div>
                                                </div>
                                                <div className='right'>
                                                    <button>Mark as Complete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainprojectcard1'>
                                            <div className='parentcard'>
                                                <div className='left'>
                                                    <img src='\assets\Frame167.png' alt='img' className='img-fluid' />
                                                    <div className='cardtext'>
                                                        <h6>Launch of our beta platform.</h6>
                                                        <p>Q1 2024</p>
                                                    </div>
                                                </div>
                                                <div className='right'>
                                                    <button>Mark as Complete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card forpad'>
                                        <div className='parentszz'>
                                            <h2>Latest Updates</h2>
                                            <button onClick={handleShow}> Create Update</button>
                                        </div>
                                        <div className='outerdivolybdr'>
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
                                                <img src='\assets\dflow.png' alt='img' className='img-fluid' />
                                            </div>
                                        </div>

                                        <div className='outerdivolybdr'>
                                            <div className='card'>
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
                                    </div>
                                </>
                            )}
                            {activeTab === 'link-4' && (
                                <>
                                    <div className='livepitch'>
                                        <div className='mainheading'>
                                            <h2>Live Pitches</h2>
                                        </div>
                                        <div className='mainparentcard'>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <Link to="/livechat">           <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' /></Link>

                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' />
                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' />
                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mainparentcard forpad'>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' />
                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' />
                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                            <div className='innercard'>
                                                <div className='maincardimg'>
                                                    <img src='\assets\livecard.svg' alt='img' className='img-fluid innerimg' />
                                                </div>
                                                <div className='contentcard'>
                                                    <p>FlowX Live</p>
                                                    <h6>20 Nov, 2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === 'link-5' && (
                                <>
                                    <div className='parentrating'>
                                        <div className='headssss'>
                                            <div className='left'>
                                                <div className='ratingcard'>
                                                    <div className='ratinghead'>
                                                        <h3>Project Rating</h3>
                                                        <p>4.8</p>
                                                        <h6><img src='\assets\Icon.svg' alt='img' className='img-fluid' />(122)</h6>
                                                        <p className='bottompara'>The Project Rating Score is derived from community feedback based on initial information provided by the project team. It may not include later developments or updates related to the project.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='right'>
                                                <div className='parentright'>
                                                    <p>Project Vision</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='parentright'>
                                                    <p>Roadmap</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='parentright'>
                                                    <p>Team</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='parentright'>
                                                    <p>Tokenomics</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='parentright'>
                                                    <p>MVP</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                                <div className='parentright'>
                                                    <p>Pitch</p>
                                                    <img src='\assets\Icon.svg' alt='img' className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='addfeed'>
                                            <button onClick={handleShow5}>Add Feedback</button>
                                        </div>
                                        <div className='ratingbottomcard'>
                                            <div className='bottomcardparent'>
                                                <div className='left'>
                                                    <img src='\assets\actor1.png' alt='img' className='img-fluid bottomimg' />
                                                </div>
                                                <div className='right'>
                                                    <div className='rightparentcard'>
                                                        <div className='innerleft'>
                                                            <p>Jessica Butler</p>
                                                            <h6>15 Nov, 2023 2:45 PM</h6>
                                                        </div>
                                                        <div className='innerright'>
                                                            <h6>Rating</h6>
                                                            <p><img src='\assets\Star1.png' alt='img' className='img-fluid' />4.6</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='paradown'>Sed quidem voluptatem quo minus aliquam qui expedita inventore qui reiciendis consectetur et molestiae obcaecati et animi consequatur in saepe quia!</p>
                                        </div>
                                        <div className='ratingbottomcard'>
                                            <div className='bottomcardparent'>
                                                <div className='left'>
                                                    <img src='\assets\actor1.png' alt='img' className='img-fluid bottomimg' />
                                                </div>
                                                <div className='right'>
                                                    <div className='rightparentcard'>
                                                        <div className='innerleft'>
                                                            <p>Jessica Butler</p>
                                                            <h6>15 Nov, 2023 2:45 PM</h6>
                                                        </div>
                                                        <div className='innerright'>
                                                            <h6>Rating</h6>
                                                            <p><img src='\assets\Star1.png' alt='img' className='img-fluid' />4.6</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='paradown'>Sed quidem voluptatem quo minus aliquam qui expedita inventore qui reiciendis consectetur et molestiae obcaecati et animi consequatur in saepe quia!</p>
                                        </div>
                                        <div className='ratingbottomcard'>
                                            <div className='bottomcardparent'>
                                                <div className='left'>
                                                    <img src='\assets\actor1.png' alt='img' className='img-fluid bottomimg' />
                                                </div>
                                                <div className='right'>
                                                    <div className='rightparentcard'>
                                                        <div className='innerleft'>
                                                            <p>Jessica Butler</p>
                                                            <h6>15 Nov, 2023 2:45 PM</h6>
                                                        </div>
                                                        <div className='innerright'>
                                                            <h6>Rating</h6>
                                                            <p><img src='\assets\Star1.png' alt='img' className='img-fluid' />4.6</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='paradown'>Sed quidem voluptatem quo minus aliquam qui expedita inventore qui reiciendis consectetur et molestiae obcaecati et animi consequatur in saepe quia!</p>
                                        </div>
                                    </div>

                                </>
                            )}
                        </div>

                        <div className='right gggg'>
                            <div className='presalecard'>
                                <div className='parent'>
                                    <div className='left'>
                                        <p>Presale Ending In</p>
                                    </div>
                                    <div className='right'>
                                        <div className='inner'>
                                            <p className='green'>{day ? day : 0} </p>
                                            <p className='grey'>Days</p>
                                        </div>
                                        <span>:</span>
                                        <div className='inner'>
                                            <p className='green'>{hour ? hour : 0} </p>
                                            <p className='grey'>Hours</p>
                                        </div>
                                        <span>:</span>
                                        <div className='inner'>
                                            <p className='green'>{min ? min : 0} </p>
                                            <p className='grey'>MINUTES</p>
                                        </div>
                                        <span>:</span>
                                        <div className='inner'>
                                            <p className='green'>{sec ? sec : 0} </p>
                                            <p className='grey'>Seconds</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className='yellowcard'>
                                <img src='\assets\ticket (1) 1.png' alt='img' className='img-fluid ticket' />
                                <h2 className='main'>available Tickets</h2>
                                <div className='brdr'></div>
                                <div className='parent'>
                                    <div className='first'><p>Tier</p></div>
                                    <div className='first'><p>Available</p></div>
                                    <div className='first'><p>Max Use</p></div>
                                    <div className='first'><p>Amount</p></div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parents'>
                                    <div className='first'><p>1</p></div>
                                    <div className='first'><p>52</p></div>
                                    <div className='first'><p>2</p></div>
                                    <div className='first'><p>$500 <span>x2</span></p></div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parents'>
                                    <div className='first'><p>1</p></div>
                                    <div className='first'><p>52</p></div>
                                    <div className='first'><p>2</p></div>
                                    <div className='first'><p>$500 <span>x2</span></p></div>
                                </div>
                                <div className='brdr'></div>
                                <div className='parents'>
                                    <div className='first'><p>1</p></div>
                                    <div className='first'><p>52</p></div>
                                    <div className='first'><p>2</p></div>
                                    <div className='first'><p>$500 <span>x2</span></p></div>
                                </div>

                            </div> */}
                            {/* <div className='participatebtn'>
                                <button onClick={handleShow}>Participate</button>
                            </div> */}
                            {/* <div className='joinproject'>
                                <div className='maintexts'>
                                    <h3 onClick={handleShow3}>Join Project</h3>
                                    <input type='text' placeholder='Amount' />
                                    <div className='projectparent'>
                                        <p>Amount <span>0.5 USDT</span></p>
                                        <p>Balance: <span>2,212.445 USDT</span></p>
                                    </div>
                                    <button>Buy Now</button>
                                </div>
                            </div> */}
                            <div className='project'>
                                <h2 className='projecthead'>Project Progress</h2>
                                <div className="cardprogress">
                                    <div className="cardprogressheadings">
                                        <p className="cardprogresspara">Progress</p>
                                        <h6 className="cardprogresshead">0.00%</h6>
                                    </div>
                                    <ProgressBar now={50} />
                                    <div className="cardprogressheadings">
                                        <p className="cardprogresspara">0.00 USDT</p>
                                        <h6 className="cardprogresshead">5,000 USDT</h6>
                                    </div>
                                </div>

                            </div>
                            <div className='bottomcard'>
                                <div className='bottomcardparent'>
                                    <h6>Status</h6>
                                    <p>{detail?.launchpadApplicationStatus}</p>

                                </div>
                                <div className='bottomcardparent'>

                                    <h6>Current Rate</h6>
                                    <p>$0.02 = 1 ECLIP</p>

                                </div>
                                <div className='bottomcardparent'>

                                    <h6>Max Contribution</h6>
                                    <p>5 USDT</p>

                                </div>
                                <div className='bottomcardparent'>

                                    <h6>Total Contributors</h6>
                                    <p>0</p>
                                </div>

                            </div>
                            <div className='contactcard'>
                                <h2>Contact Information</h2>
                                <div className='brdr'></div>
                                <div className='parentpara'>
                                    <p>Contact Name:<span>Patrick Murphy</span></p>
                                    <p>Contact Telegram:<span>https://t.me/patrickmurphy</span></p>
                                    <p>Contact Email:<span>patrickmurphy@gmail.com</span></p>
                                </div>

                            </div>
                            <div className='buttons'>
                                <button onClick={() => blocked()} className='block'>Block Project</button>
                                <button className='release'>Release Funds</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
            <Modal className='participatemodal' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='muinput'>
                        <div class="material-textfield">
                            <input placeholder="Enter Update URL" type="text" />
                            <label>Update URL</label>
                        </div>
                        <p>PASTE</p>
                    </div>


                    <div className='endbtns'>
                        <button className='cancel' > Cancel</button>
                        <button className='confirm forpadd' onClick={() => {
                            handleShow1();
                            handleClose();
                        }}> Confirm</button>
                    </div>
                </Modal.Body>

            </Modal>

            {/* <Modal className='participatemodal' show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Participate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='main-card'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='tblheadss'>
                                    <tr>
                                        <th>Tier</th>
                                        <th>Tickets</th>

                                        <th>Amount</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            <p>$500 x2</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            <p>$500 x2</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            <p>$500 x2</p>
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='endbtns'>
                        <button className='cancel' > Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleShow2();
                            handleClose1();
                        }}> Confirm</button>
                    </div>
                </Modal.Body>

            </Modal> */}

            {/* <Modal className='participatemodal' show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p>Tickets Submitted Successfully</p>
                        <button>Okay</button>
                    </div>
                </Modal.Body>

            </Modal> */}

            {/* <Modal className='participatemodal' show={show3} onHide={handleClose3} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Join Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='joincard'>
                        <div className='parentjoin'>
                            <p>Amount USDT</p>
                            <h6>$1342.53</h6>
                        </div>
                        <div className='parentjoin'>
                            <p>Token Amount</p>
                            <h6>67,126.</h6>
                        </div>
                        <div className='parentjoin'>
                            <p>Current Rate</p>
                            <h6>$0.02 = 1 FLOW</h6>
                        </div>
                    </div>
                    <div className='endbtns'>
                        <button className='cancel' > Cancel</button>
                        <button className='confirm' onClick={() => {
                            handleShow4();
                            handleClose3();
                        }} > Confirm</button>
                    </div>
                </Modal.Body>

            </Modal> */}

            {/* 
            <Modal className='participatemodal' show={show4} onHide={handleClose4} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p>Participated Successfully</p>
                        <button>Okay</button>
                    </div>
                </Modal.Body>

            </Modal> */}
            {/* 
            <Modal className='participatemodal' show={show5} onHide={handleClose5} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Submit Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='parentfeed'>
                        <p>Project Vision and Use Case:</p>
                        <h6>1/10</h6>
                    </div>
                    <div className='boxes'>
                        <div className='mainbox'>
                            <div className='parentbox'>
                                <img src='\assets\star.svg' alt='img' className='img-fluid' />
                                <p>Not good enough</p>
                            </div>
                            <div className='parentbox'>
                                <img src='\assets\star.svg' alt='img' className='img-fluid' />
                                <p>Not good enough</p>
                            </div>
                            <div className='parentbox'>
                                <img src='\assets\star.svg' alt='img' className='img-fluid' />
                                <p>Not good enough</p>
                            </div>
                            <div className='parentbox'>
                                <img src='\assets\star.svg' alt='img' className='img-fluid' />
                                <p>Not good enough</p>
                            </div>
                            <div className='parentbox'>
                                <img src='\assets\star.svg' alt='img' className='img-fluid' />
                                <p>Not good enough</p>
                            </div>
                        </div>
                    </div>
             
                    <div className='endbtnsss'>
                        <button className='back'><img src='\assets\Arrow_Left_MD.png' alt='img' className='img-fluid' />Back</button>
                        <button className='submit' onClick={() => {
                            handleShow6();
                            handleClose5();
                        }}>Submit</button>
                    </div>
                </Modal.Body>


            </Modal> */}
            {/* <Modal className='participatemodal' show={show6} onHide={handleClose6} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='success'>
                        <img src='\assets\tick.svg' alt='img' className='img-fluid' />
                        <p>your Feedback submitted successfully</p>
                        <button>Okay</button>
                    </div>
                </Modal.Body>

            </Modal> */}
        </>
    )
}

export default Userpresaleflow