import React from 'react';

class SplashSuggestion extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(e){
        let selectedTask = e.currentTarget.innerText;
        this.props.initializeTask(selectedTask)
            .then(() => this.props.history.push('/task-form/new'))
    }

    render() {
        return (
            <div className="get-inspired-container">
                <div className="get-inspired-content">
                    <h2 className="get-inspired-header">Get Inspired</h2>
                    <div className="get-inspired-top">
                        <a className="get-inspired-image-big"><img src="https://bit.ly/2SKicSH"/></a>
                        <a className="get-inspired-box">
                            <h3 className="get-inspired-text-main">Tackle those home projects &amp; repairs you've been putting off</h3>
                            <div className="task-suggestion-price">Avg. Project $46 - $117</div>
                            <button onClick={this.handleClick.bind(this)} className="task-suggestion-button">Book Handyman</button>
                        </a>
                    </div>
                    <div className="get-inspired-bottom">
                        <a className="task-suggestion-box">
                            <img className="task-suggestion-image" src="https://bit.ly/2GAfFDN"/>                            
                            <div className="task-details-container">
                                <h3 className="task-suggestion-title">Mount a TV or Mirror</h3>
                                <div className="task-suggestion-price">Avg. Project: $48 - $99</div>
                                <button onClick={this.handleClick.bind(this)} className="task-suggestion-button">Book Mounting</button>
                            </div>
                        </a>
                        <a className="task-suggestion-box">
                            <img className="task-suggestion-image" src="https://bit.ly/2EiOr2a" />
                            <div className="task-details-container">
                                <h3 className="task-suggestion-title">Put together furniture</h3>
                                <div className="task-suggestion-price">Avg. Project: $47 - $119</div>
                                <button onClick={this.handleClick.bind(this)} className="task-suggestion-button">Book Assembly</button>
                            </div>
                        </a>
                        <a className="task-suggestion-box">
                            <img className="task-suggestion-image" src="https://bit.ly/2S9VVs8" />
                            <div className="task-details-container">
                                <h3 className="task-suggestion-title">Lift & shift heavy items</h3>
                                <div className="task-suggestion-price">Avg. Project: $47 - $97</div>
                                <button onClick={this.handleClick.bind(this)} className="task-suggestion-button">Book Help Moving</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashSuggestion;