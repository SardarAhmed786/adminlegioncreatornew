import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
const Stepfinish = ({ onNext, onBack }) => {
  const [activeTab, setActiveTab] = useState('link-1');
  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <section className=''>
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
              <div className='partnerimage'>
                <img src='\assets\partner.svg' alt='img' className='img-fluid partner' />
              </div>

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
          <div className='tokenutility'>
            <h2 className='mainhead'>Latest Updates</h2>
            <div className='cardsssparent'>
              <div className='innerimagess'>
                <img src='\assets\presale.png' alt='img' className='img-fluid' />
              </div>
              <div className='textsss'>
                <p>FlowX_Official</p>
                <h6>20 Nov, 2023</h6>
              </div>
            </div>
            <p className='grey'>Ut omnis suscipit aut exercitationem eius qui cumque ullam qui sunt nihil sit quam consequuntur non odio odio et corrupti velit. Est consequuntur quasi a blanditiis laboriosam et dicta fugit ea nihil earum.

            </p>
            <p className='grey'>#FLOWX #Crypto #Blockchain #Token</p>
            <div className='endimagesss'>
              <img src='\assets\Frame1171273142.png' alt='img' className='img-fluid' />
            </div>
          </div>

        </>
      )}
      {activeTab === 'link-4' && (
        <>
          <div className='summerycard'>
            <div className='summeryparent'>
              <p>Amount to raise (USD)</p>
              <h6>500,000,000</h6>
            </div>
            <div className='summeryparent'>
              <p>Token Address</p>
              <h6>0x7b44578c25F6CC536893699360E3a84b7aa9B5FB</h6>
            </div>
            <div className='summeryparent'>
              <p>Project Name</p>
              <h6>PreSaleToken</h6>
            </div>
            <div className='summeryparent'>
              <p>Token Symbol</p>
              <h6>PST</h6>
            </div>
            <div className='summeryparent'>
              <p>Token decimals</p>
              <h6>9</h6>
            </div>
            <div className='summeryparent'>
              <p>Presale Rate</p>
              <h6>10</h6>
            </div>
            <div className='summeryparent'>
              <p>Listing Rate</p>
              <h6>5</h6>
            </div>
            <div className='summeryparent'>
              <p>Softcap (USD)</p>
              <h6>100,000</h6>
            </div>
            <div className='summeryparent'>
              <p>Hardcap (USD)</p>
              <h6>100,000,000</h6>
            </div>
            <div className='summeryparent'>
              <p>Start time</p>
              <h6>12-Jan-2024 15:30 (UTC)</h6>
            </div>

            <div className='summeryparent'>
              <p>End time</p>
              <h6>20-Mar-2024 12:30 (UTC)</h6>
            </div>
            <div className='summeryparent'>
              <p>Website</p>
              <h6>https://www.presaletoken.io/</h6>
            </div>
            <div className='summeryparent'>
              <p>Facebook</p>
              <h6>https://www.facebook.com/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Twitter</p>
              <h6>https://www.twitter.com/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Github</p>
              <h6>https://www.github.com/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Telegram</p>
              <h6>https://www.t.me/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Instagram</p>
              <h6>https://www.instagram.com/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Discord</p>
              <h6>https://www.discord.com/presaletoken</h6>
            </div>
            <div className='summeryparent'>
              <p>Reddit</p>
              <h6>https://www.reddit.com/presaletoken</h6>
            </div>
            <div className='endboxx'>
              <p>Warning: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>

        </>
      )}

      <div className="stepbuttons endstep">
        <button className="dullbtn" onClick={onBack}>
          Back
        </button>
        <button className="stepbtn"  onClick={handleShow}>
          Submit
        </button>
      </div>
    </section>
    
    <Modal className='successmodal' show={show} onHide={handleClose}>
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
     
      </Modal>
    </>

  )
}

export default Stepfinish