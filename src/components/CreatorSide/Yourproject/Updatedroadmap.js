import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Updatedroadmap = () => {
    return (
        <>
            <Header />
            <section className='mainproject'>
                <div className="custom-container">
                    <div className='row'>
                        <div className='col-xl-8 col-md-12 m-auto'>
                            <div className='outerdivolybdrss '>
                                <div className='innercontentss'>
                                    <div className='leftss'>
                                        <div className='innerrightss'>
                                            <img src='\assets\presale.png' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='innerleftss'>
                                            <h4>Eclipsefi</h4>
                                            <p>20 Nov, 2023</p>
                                        </div>
                                    </div>
                               
                                <div className='bottomcontentssss'>
                                    <p className='officialflows pb-3'>EclipseFi Updated Roadmap Is Now Live! </p>
                                    <p className='officialflows pb-3'>After a successful token & platform launch in Q4 2024, we continue to ship.  </p>
                                    <p className='officialflows pb-3'>Back in December, we completed a $1.9M round with individuals and funds like
                                        <span className='bluessedx'>@Momentum_6, @Faculty__Group, @IvanOnTech, @BrianDEvans, @gainzy222</span> to build a web3 launch hub on @Cosmos and leading L2s </p>

                                    <img src='\assets\dflow11.png' alt='img' className='img-fluid w-100' />

                                </div>
                                </div>
                                <div className='twinnsdfbtns'>
                                    <button className='lefttwinbtn'>
                                        Reject
                                    </button>
                                    <button className='lefttwinbtnApprove'>
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
};

export default Updatedroadmap;
