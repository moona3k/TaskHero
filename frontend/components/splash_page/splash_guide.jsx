import React from 'react';

const SplashGuide = () => {
    return (
        <div className="splashGuide-root-container">
        <div className="splashGuide-container">
            <div className="splashGuide-header">
                <strong>How It Works</strong>
            </div>
            <div className="splashGuide-all-steps-container">
                <div className="splashGuide-step-container">
                    <img className="step-image-icon"src="https://bit.ly/2NfgF0O" />
                    <div className="step-content">
                        <div className="step-content-number">1</div>
                        <div className="step-content-title">Describe the task</div>
                        <div className="step-content-description">Choose from a variety of home services and select the day and time you'd like a qualified Tasker to show up. Give us the details and we'll find you the help.</div>
                    </div>
                </div>
                <div className="splashGuide-step-container">
                    <div className="step-content">
                        <div className="step-content-number">2</div>
                        <div className="step-content-title">Get matched</div>
                        <div className="step-content-description">Select from a list of qualified and fully vetted Taskers for the job. Choose Taskers by their hourly rate and start chatting with them right in the app.</div>
                    </div>
                    <img className="step-image-icon" src="https://bit.ly/2T4lUWv" />
                </div>
                <div className="splashGuide-step-container">
                    <img className="step-image-icon" src="https://bit.ly/2DUf4t1" />
                    <div className="step-content">
                        <div className="step-content-number">3</div>
                        <div className="step-content-title">Get it done</div>
                        <div className="step-content-description">Just like that, your Tasker arrives and gets the job done. When your task is complete, payment will happen seamlessly and securely through the app.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SplashGuide;