import React, { useEffect, useState } from 'react'
import "./details.scss"
import Header from '../../Header/Header'
import { Nav } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
const Details = () => {
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
    return (
        <>
            <Header />
            <section className='maindetails'>
                <div className="custom-container">
                    <div className='detailimage'>
                        <img src='\assets\detailimg.svg' alt='img' className='img-fluid images' />
                    </div>
                    <div className='parentdetail'>
                        <div className='left'>
                            <div className='card'>
                                <div className='innercontent'>
                                    <div className='left'>
                                        <div className='innerright'>
                                            <img src='\assets\imagecard.svg' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='innerleft'>
                                            <h4>Eclipse Fi</h4>
                                            <p>$ECLIP</p>
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
                                        <p><img src='\assets\Star.png' alt='img' className='img-fluid' />0.0</p>
                                    </div>
                                </div>
                                <div className='secondcard'>
                                    <div className='textcard'>
                                        <p>Token Price</p>
                                        <h6>$0.02</h6>
                                    </div>
                                    <div className='textcard'>
                                        <p>Token Price</p>
                                        <h6>$0.02</h6>
                                    </div>
                                    <div className='textcard'>
                                        <p>Token Price</p>
                                        <h6>$0.02</h6>
                                    </div>
                                    <div className='textcard'>
                                        <p>Token Price</p>
                                        <h6>$0.02</h6>
                                    </div>
                                    <div className='textcard'>
                                        <p>Token Price</p>
                                        <h6>$0.02</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='mainssss'>
                                <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Live</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Upcoming</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">
                                            Ended
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">
                                            Live Pitch
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                            </div>
                            {activeTab === 'link-1' && (
                                <>
                                    <div className='infocard'>
                                        <div className='mainheading'>
                                            <h2>Project Vision and Use Case:</h2>
                                            <p>The launchpad game hasn't changed for 5 years! There is limited innovation there. Projects are launching under questionable conditions, causing active community members to not be properly incentivized. It doesn’t benefit the projects as well, as the tokens are often distributed to community members that are NOT adding extra value to the project's development, future, and upcoming market positioning.</p>
                                        </div>
                                        <div className='mainimage'>
                                            <img src='\assets\infoimg.svg' alt='img' className='img-fluid info' />
                                        </div>
                                        <div className='roadmap'>
                                            <h2>Roadmap and Milestones:</h2>
                                            <div className='roadmap'>
                                                <img src='\assets\roadmap.svg' alt='img' className='img-fluid roadimg' />
                                            </div>
                                        </div>
                                        <div className='roadmap'>
                                            <h2>Team Experience and Background:</h2>
                                            <div className='roadmap'>
                                                <img src='\assets\back.svg' alt='img' className='img-fluid roadimg' />
                                            </div>
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
                                            <div className='graycard'>
                                                <p className='graytext'>Hard Cap</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>2,500,000 USD</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Soft Cap</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>10,000,000 FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Total Token Supply</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>1,000,000,000 FLOW</p>
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
                                                <p className=''>0.05 USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Tokens Offered</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>50,000,000 FLOW</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='whitecard'>
                                                <p className='graytext'>Hard Cap Per User</p>
                                            </div>
                                            <div className='whitecard'>
                                                <p className=''>15,000 USD (price in USDT will be determined prior to the start of subscription)</p>
                                            </div>
                                        </div>
                                        <div className='parenttokencard'>
                                            <div className='graycard'>
                                                <p className='graytext'>Token Sale Vesting Period</p>
                                            </div>
                                            <div className='graycard'>
                                                <p className=''>No lockup</p>
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
                                </>
                            )}
                            {activeTab === 'link-2' && (
                                <>
                                    <h1>ahmad</h1>
                                </>
                            )}
                            {activeTab === 'link-3' && (
                                <>
                                    <h1>hamza</h1>
                                </>
                            )}
                        </div>

                        <div className='right'>
                            <div className='presalecard'>
                                <div className='parent'>
                                    <div className='left'>
                                        <p>Presale Starts In</p>
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
                            <div className='project'>
                                <h2 className='projecthead'>Project Progress</h2>
                                <div className="cardprogress">
                                    <div className="cardprogressheadings">
                                        <p className="cardprogresspara">Progress</p>
                                        <h6 className="cardprogresshead">0.00%</h6>
                                    </div>
                                    <ProgressBar now={0} />
                                    <div className="cardprogressheadings">
                                        <p className="cardprogresspara">0.00 USDT</p>
                                        <h6 className="cardprogresshead">5,000 USDT</h6>
                                    </div>
                                </div>

                            </div>
                            <div className='bottomcard'>
                                <div className='bottomcardparent'>
                                    <h6>Status</h6>
                                    <p>Upcoming</p>

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
                            <div className='endbtns'>
                                <Link to="/livechat" className='w-100'>  <button><img src='\assets\red.png' alt='img' className='img-fliuid' />Start Live Pitching</button></Link>

                                <button>Request Funds Release</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details