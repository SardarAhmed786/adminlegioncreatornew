import React from 'react'

const Stepsociallinks = ({ onNext, onBack }) => {
    return (
        <section className='verifytoken'>
            <h6 className="verifyhead">Social Links</h6>
            <div className="option-field">
                <div class="material-textfield">
                    <input placeholder="Facebook account" type="text" />
                    <label>Facebook</label>
                </div>
                <div class="material-textfield">
                    <input placeholder="Twitter account" type="text" />
                    <label>Twitter</label>
                </div>
            </div>
            <div className="option-field">
                <div class="material-textfield">
                    <input placeholder="Github account" type="text" />
                    <label>Github</label>
                </div>
                <div class="material-textfield">
                    <input placeholder="Telegram account" type="text" />
                    <label>Telegram</label>
                </div>
            </div>
            <div className="option-field">
                <div class="material-textfield">
                    <input placeholder="Instagram account" type="text" />
                    <label>Instagram</label>
                </div>
                <div class="material-textfield">
                    <input placeholder="Discord account" type="text" />
                    <label>Discord</label>
                </div>
            </div>
            <div className="option-field">
                <div class="material-textfield">
                    <input placeholder="Reddit account" type="text" />
                    <label>Reddit</label>
                </div>
                <div class="material-textfield">
                    <input placeholder="Medium account" type="text" />
                    <label>Medium</label>
                </div>
            </div>
            <div className="stepbuttons">
                <button className="dullbtn" onClick={onBack}>
                    Back
                </button>
                <button className="stepbtn" onClick={onNext}>
                    Next
                </button>
            </div>
        </section>
    )
}

export default Stepsociallinks