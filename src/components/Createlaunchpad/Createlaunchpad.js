import React, { useEffect, useState } from 'react'
import Stepverifytoken from './Stepverifytoken';
import Steplaunchpadinfo from './Steplaunchpadinfo';
import Stepprojectdescription from './Stepprojectdescription';
import Stepmilestones from './Stepmilestones';
import Stepsociallinks from './Stepsociallinks';
import Stepfinish from './Stepfinish';
import './createlaunchpad.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Createlaunchpad = () => {
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';

    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => {
            if (isLocalStorageAvailable) {
                localStorage.setItem('currentStep', (prevStep + 1).toString());
            }
            return prevStep + 1;
        });
    };
    const handlePrevStep = () => {
        setCurrentStep((prevStep) => {
            if (isLocalStorageAvailable) {
                localStorage.setItem('currentStep', (prevStep - 1).toString());
            }
            return prevStep - 1;
        });
    };
    useEffect(() => {
        if (isLocalStorageAvailable) {
            const storedStep = localStorage.getItem('currentStep');

            if (!storedStep) {
                localStorage.setItem('currentStep', currentStep.toString());
            } else {
                setCurrentStep(parseInt(storedStep));
            }
        }
    }, [currentStep, isLocalStorageAvailable]);


    const renderContent = () => {
        switch (currentStep) {
            case 1:
                return <><Stepverifytoken onNext={handleNextStep} /></>;
            case 2:
                return <><Steplaunchpadinfo onNext={handleNextStep} onBack={handlePrevStep} /></>;
            case 3:
                return <><Stepprojectdescription onNext={handleNextStep} onBack={handlePrevStep} /></>;
            case 4:
                return <><Stepmilestones onNext={handleNextStep} onBack={handlePrevStep} /></>;
            case 5:
                return <><Stepsociallinks onNext={handleNextStep} onBack={handlePrevStep} /></>;
            case 6:
                return <><Stepfinish onBack={handlePrevStep} /></>;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <section className='createnew'>
                <div className="custom-container">
                    <div className='createparent'>
                        <div className='leftcard'>
                            <h4 className="leftcardhead">Create Launchpad</h4>
                            <div className="leftcardmain">
                                <div className={currentStep === 1 || currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'activeinner' : 'listinner'}>
                                    <div className="stepcircle">
                                        <span className={currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'stepspan blue' : 'stepspan'}>
                                            1
                                        </span>
                                        <span className={currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'linespan blue steplineheightone' : 'linespan steplineheightone'}></span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Verify Token</h6>
                                        <p className="createpara">Enter the token address and verify</p>
                                    </div>
                                </div>
                                <div className={currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'activeinner' : 'listinner'}>
                                <div className="stepcircle">
                                        <span className={currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'stepspan blue' : 'stepspan'}>
                                            2
                                        </span>
                                        <span className={currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'linespan blue steplineheighttwo' : 'linespan steplineheighttwo'}></span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Launchpad Info</h6>
                                        <p className="createpara">Enter the launchpad information that you want to raise , that should be enter all details about your presale</p>
                                    </div>
                                </div>
                                <div className={currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'activeinner' : 'listinner'}>
                                <div className="stepcircle">
                                        <span className={currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'stepspan blue' : 'stepspan'}>
                                            3
                                        </span>
                                        <span className={currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'linespan blue' : 'linespan'}></span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Project Description</h6>
                                        <p className="createpara">Let people know who you are</p>
                                    </div>
                                </div>
                                <div className={currentStep === 4 || currentStep === 5 || currentStep === 6 ? 'activeinner' : 'listinner'}>
                                <div className="stepcircle">
                                        <span className={currentStep === 5 || currentStep === 6 ? 'stepspan blue' : 'stepspan'}>
                                            4
                                        </span>
                                        <span className={currentStep === 5 || currentStep === 6 ? 'linespan blue' : 'linespan'}></span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Milestones</h6>
                                        <p className="createpara">Project milestones</p>
                                    </div>
                                </div>
                                <div className={currentStep === 5 || currentStep === 6 ? 'activeinner' : 'listinner'}>
                                <div className="stepcircle">
                                        <span className={currentStep === 6 ? 'stepspan blue' : 'stepspan'}>
                                            5
                                        </span>
                                        <span className={currentStep === 6 ? 'linespan blue' : 'linespan'}></span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Social Links</h6>
                                        <p className="createpara">Provide project’s social links</p>
                                    </div>
                                </div>
                                <div className={currentStep === 6 ? 'activeinner' : 'listinner'}>
                                    <div className="stepcircle">
                                        <span className="stepspan">
                                            6
                                        </span>
                                    </div>
                                    <div className='steptext'>
                                        <h6 className="createhead">Finish</h6>
                                        <p className="createpara">Review and verify your information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content'>{renderContent()}</div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Createlaunchpad