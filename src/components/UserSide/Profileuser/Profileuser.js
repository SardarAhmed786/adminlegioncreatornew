import React, { useState } from 'react'
import "./profileuser.scss"
import { Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../Header/Header';
const Profileuser = () => {
    const [activeTab, setActiveTab] = useState('link-1');
    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    }
    return (
        <>
        <Header
/>            <section className='mainprofileuser'>
                <div className="custom-container">

                    <div className='uppercard'>
                        <div className='leftmain'>
                            <div className='mainleft'>
                                <div className='innerleft'>
                                    <div className='innerimage'>
                                        <img src='\assets\Group111.png' alt='img' className='img-fluid group' />
                                    </div>
                                </div>
                                <div className='innerright'>
                                    <div className='paraparent'>
                                        <p>Justin Reed</p>
                                        <div className='paraimg'>
                                            <img src='\assets\Legend.png' alt='img' className='img-fluid' />
                                            <img src='\assets\verify.png' alt='img' className='img-fluid' />
                                        </div>

                                    </div>
                                    <h6>Member Since: Jan 2022</h6>
                                    <p className='downparacard'>💰 Crypto Investor. Passionate about NFTs and digital art and Web3.  #CryptoCurious #LGXArmy #NFTCollections #Web3</p>
                                </div>
                            </div>

                        </div>
                        <div className='right'>
                            <div className='boltcard'>
                                <div className='mainboltparent'>
                                    <p>Bolts</p>
                                    <h6>22.1K</h6>
                                </div>
                                <div className='mainboltparent'>
                                    <p>Referrals</p>
                                    <h6>500</h6>
                                </div>
                                <div className='mainboltparent'>
                                    <p>Followers</p>
                                    <h6>2.7K</h6>
                                </div>
                                <div className='mainboltparent'>
                                    <p>Following</p>
                                    <h6>2.7K</h6>
                                </div>
                                <div className='mainboltparent'>
                                    <p>Socials</p>
                                    <div className='socialicons'>
                                        <img src='\assets\3057696_instagram_media_network_social_icon 1.png' alt='img' className='img-fluid' />
                                        <img src='\assets\3057660_media_message_network_social_icon 1.png' alt='img' className='img-fluid' />
                                        <img src='\assets\8545495_discord_message_interaction_logo_communication_icon 1.png' alt='img' className='img-fluid' />
                                        <img src='\assets\3057625_facebook_media_network_social_icon 1.png' alt='img' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='brdr'></div>
                                <div className='mainboltparent'>
                                    <p>Wallet</p>
                                    <h6>0x0717E7...535</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lowerparenttabs'>
                        <div className='mainssss'>
                            <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Tokens</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Collectibles</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            {activeTab === 'link-1' && (
                                <>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btccard'>
                                        <div className='btcparent'>
                                            <div className='btcleft'>
                                                <div className='btninnerleft'>
                                                    <img src='\assets\bitcoin-btc-logo 1.png' alt='img' className='img-fluid btc' />
                                                </div>
                                                <div className='btninnerright'>
                                                    <p>Bitcoin<span>BTC</span></p>
                                                    <h6><img src='\assets\arrow-up.png' alt='img' className='img-fluid' />24.87% </h6>
                                                </div>
                                            </div>
                                            <div className='btcright'>
                                                <p>2.5456 BTC</p>
                                                <h6>$59050.79</h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === 'link-2' && (
                                <>
                                    <div className='swapacc'>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <div className='accmainparent'>
                                                        <div className='first'>
                                                            <div className='innerfirst'>
                                                                <img src='\assets\inneracc.png' alt='img' className='img-fluid pic' />
                                                            </div>
                                                            <div className='innerfirst'>
                                                                <h6>Collection</h6>
                                                                <p>Pudgy Penguins</p>
                                                            </div>
                                                        </div>
                                                        <div className='firstr'>
                                                            <h6>NFTs Owned</h6>
                                                            <p>4</p>
                                                        </div>
                                                        <div className='firstr'>
                                                            <h6>Floor Price</h6>
                                                            <p>11.14 ETH</p>
                                                        </div>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='bodyparent'>
                                                        <p>Network fee</p>
                                                        <h6>~$1.47</h6>
                                                    </div>
                                                    <div className='bodyparent'>
                                                        <p>Price Impact</p>
                                                        <h6>-14.14%</h6>
                                                    </div>
                                                    <div className='bodyparent'>
                                                        <p>Minimum output</p>
                                                        <h6>521.41 BNB</h6>
                                                    </div>
                                                    <div className='bodyparent'>
                                                        <p>Expected output</p>
                                                        <h6>521.61 BNB</h6>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </>
                            )}
                              {activeTab === 'link-3' && (
                                <>
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
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='innerparent'>
                                                    <div className='left'>
                                                        <img src='\assets\imagetbl.png' alt='img' className='img-fluid' />
                                                    </div>
                                                    <div className='right'>
                                                        <p className='bold'>FLOWX</p>
                                                        <h6>$FLOW</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><p className='bold'>$100.32K</p></td>
                                            <td><p className='green'>Live</p></td>
                                            <td><p className='bold'>ETH</p></td>
                                            <td><p className='bold'>29,200</p></td>
                                            <td><p className='bold'>2/12/2023</p></td>
                                            <td><button>Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                                </>
                            )}
                        </div>
                        <div className='second'>
                            <div className='budagcard'>
                                <p>Badges earned (25)</p>
                                <div className='mainmultiple'>
                                    <img src='\assets\multiple.png' alt='img' className='img-fluid' />
                                </div>
                            </div>
                            <div className='secondyellowcard'>
                                <div className='parentticket'>
                                    <h6>Tickets Available</h6>
                                    <button >Ticket History</button>
                                </div>
                                <div className='tickentendsss'>
                                    <div className='first'>
                                        <p>Tier 1 Tickets</p>
                                        <h6>35</h6>
                                    </div>
                                    <div className='first'>
                                        <p>Tier 2 Tickets</p>
                                        <h6>52</h6>
                                    </div>
                                    <div className='first'>
                                        <p>Tier 3 Tickets</p>
                                        <h6>61</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='groupcard'>
                                <h2>Groups(11)</h2>
                                <div className='groupinner'>
                                    <div className='groupinnerparent'>
                                        <div className='leftgroup'>
                                            <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='rightgroup'>
                                            <p>Web3 Group</p>
                                            <h6>Web3 is a term used to describe the next itera</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className='groupinner'>
                                    <div className='groupinnerparent'>
                                        <div className='leftgroup'>
                                            <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='rightgroup'>
                                            <p>Web3 Group</p>
                                            <h6>Web3 is a term used to describe the next itera</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className='groupinner'>
                                    <div className='groupinnerparent'>
                                        <div className='leftgroup'>
                                            <img src='\assets\web3.png' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='rightgroup'>
                                            <p>Web3 Group</p>
                                            <h6>Web3 is a term used to describe the next itera</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='entbtnsss'>
                                <button>See More</button>
                            </div>
                        </div>

                    </div>

                </div>
  
        </section >
    </>
  )
}

export default Profileuser