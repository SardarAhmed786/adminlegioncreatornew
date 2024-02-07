import React from 'react'
import "./launch.scss"
const Launch = () => {
  return (
    <>
    <section className='mainlaunch'>
    <div className="custom-container">
        <div className='parenttext'>
            <h3>Why launch with us</h3>
            <p>Qui velit corrupti sed nobis repellendus nam dolorem neque rem commodi voluptas et officia libero</p>
        </div>
        <div className='parentcard'>
            <div className='innercard'>
                <h3>Raise funds publicly</h3>
                <p>Access a global reach of dedicated backers in a transparent and decentralized setting.</p>
            </div>
            <div className='innercard'>
                <h3>Build a community</h3>
                <p>Grow and nurture your most loyal supporters from the very beginning. They’ve got your back!</p>
            </div>
            <div className='innercard'>
                <h3>Decrease risk</h3>
                <p>Take full control of your fundraising and leverage Polkastarter’s experience and community.</p>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Launch