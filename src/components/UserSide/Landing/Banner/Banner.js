import React from 'react'
import "./banner.scss"
const Banner = () => {
  return (
    <>
      <section className='userbanner'>
   
        <div className="custom-container">
          <div className='row'>
            <div className='col-xl-6 col-12 m-auto'>
              <div className='mainhead'>
                <h2>Unlock Tomorrow's Innovations Today</h2>
                <p>Secure early access to meticulously selected Web3 projects, trusted and endorsed by top-tier industry leaders.</p>
              </div>
              <div className='twisebtns'>
                <button className='upcoming'>Upcoming Projects</button>
                <button className='buy'>Buy $LGX</button>
              </div>
              <div className='endpara'>
                <div className='textparent'>
                  <h6>80+</h6>
                  <p>Project Launched</p>
                </div>
                <div className='textparent'>
                  <h6>$2,423,855,192</h6>
                  <p>Total raised</p>
                </div>
                <div className='textparent'>
                  <h6>$106,979,817</h6>
                  <p>RAISED CAPITAL</p>
                </div>
                <div className='textparent'>
                  <h6>4,957,557</h6>
                  <p>UNIQUE PARTICIPANTS</p>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-12 m-auto'>
              <div className='mainimg'>
                <div className='innerimage'>
                  <img src='\assets\rocket.png' className='img-fluid rocket' />
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
