import React, { useState } from 'react'
import RichTextEditor from './RichTextEditor';

const Stepprojectdescription = ({ onNext, onBack }) => {
    const [description, setDescription] = useState('')
    const getValue = (description) => {
        setDescription(description);
    };
    return (
        <section className='verifytoken'>
            <h6 className="verifyhead">Project Description</h6>
            <div className="texteditorheading">
                <h6 className="innerheading">Project Vision and Use Case</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Roadmap and Milestones</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Team Experience and Background</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Tokenomics and Utility</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Market Analysis, Target Audience, and Go-to-Market Strategy</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Regulatory Compliance</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Partnerships and Collaborations</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Financial Health and Funding</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
            </div>
            <div className="texteditorheading">
                <h6 className="innerheading">Community and Ecosystem Engagement</h6>
            </div>
            <div className="textediutoremain">
                <RichTextEditor initialValue={description} getValue={getValue} />
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

export default Stepprojectdescription