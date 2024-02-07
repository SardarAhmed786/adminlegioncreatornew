import React from 'react'

const Stepverifytoken = ({ onNext }) => {
    return (
        <section className='verifytoken'>
            <h6 className="verifyhead">Verify Token</h6>
            <div class="material-textfield">
                <input placeholder="Token address" type="text" />
                <label>Token address</label>
            </div>
            <div className="tokeninfomain">
                <div className="tokeninfoinner">
                    <p className="tokeninfopara">Token Name</p>
                    <h6 className="tokeninfohead">DelRey Inu</h6>
                </div>
                <div className="tokeninfoinner">
                    <p className="tokeninfopara">Token Symbol</p>
                    <h6 className="tokeninfohead">DELREY</h6>
                </div>
                <div className="tokeninfoinner">
                    <p className="tokeninfopara">Token Decimals</p>
                    <h6 className="tokeninfohead">9</h6>
                </div>
            </div>
            <button className="stepbtn" onClick={onNext}>
                Next
            </button>
        </section>
    )
}

export default Stepverifytoken