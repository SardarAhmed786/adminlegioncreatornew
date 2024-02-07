import React from 'react'
import "./idapplication.scss"
import Footer from '../../Footer/Footer'
const Idapplication = () => {
    return (
        <>
            <section className='idapplication'>
                <div className='custom-container'>
                    <div className='parent'>
                        <div className='mainlog'>
                            <img src='\assets\id.png' alt='img' className='img-fluid' />
                        </div>
                        <div className='card'>
                            <h3>Legion Launchpad IDO Application</h3>
                            <p>Welcome to the future of decentralized fundraising on Legion Launchpad. Our mission is to bring the highest quality projects together with investors to enable the launch of innovative startups and technology. With this goal, it is the responsibility of the Legion Launchpad Council to act as a governance board to ensure quality and due diligence for the projects we launch.</p>
                            <p>The Council will review and vote on your application for launch on Legion Launchpad. Each application is submitted to a thorough and rigorous review during the due diligence process, and then evaluated based on objective merits. Each of the Council members will cast their vote, and projects having greater than 60% of the Council's vote are approved for launch. If approved, projects will be provided with detailed instructions on how to prepare for and execute their launch on Legion Launchpad.</p>
                            <p>
                                Interested projects should create a profile using this website and submit an application. A member of the Legion Launchpad review team will contact you with further instructions.</p>
                        <button>Start Application</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Idapplication