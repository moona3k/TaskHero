import React from 'react';

class ToggleMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    handleClick(){
        this.setState( { show: !this.state.show })
    }

    render(){
        
        let showDetail = 
            <div className="toggle-detail-show">
                <strong className="toggle-detail-hover" onClick={this.handleClick.bind(this)}>
                    Show Details <i className="fa fa-angle-down"></i>
                </strong>
            </div>

        let hideDetail = 
            <div>
                <div className="dashboard-task-box-4">
                    <div className="box-4-container">
                        <div className="my-task-small-box">
                            <h5 className="my-task-subtitle">Location</h5>
                            <div><i className="fa fa-map-marker"/> {this.props.location}</div>
                        </div>
                        <div className="box-4-inner-box">
                            <div className="my-task-small-box-tasker">
                                <h5 className="my-task-subtitle">Tasker</h5>
                                <div>{this.props.first_name} {this.props.last_name}</div>
                            </div>
                            <div className="my-task-small-box">
                                <h5 className="my-task-subtitle">Price</h5>
                                <div>${this.props.hourly_rate}/hr</div>
                            </div>
                        </div>
                    </div>

                    <div className="my-task-small-box">
                        <h5 className="my-task-subtitle">Description</h5>
                        <div>{this.props.description}</div>
                    </div>
                    <div className="horizontal-short-line"></div>
                    <div className="my-task-small-box">
                        <h5 className="my-task-subtitle">Vehicle Requirements</h5>
                        <div>{this.props.vehicle_type}</div>
                    </div>
                </div>
                <div className="toggle-detail-hide">
                    <strong className="toggle-detail-hover" onClick={this.handleClick.bind(this)}>
                        Hide Details <i className="fa fa-angle-up"></i>
                    </strong>
                </div>
            </div>
        
        let renderDetail;

        if (this.state.show === false){
            renderDetail = hideDetail
        } else {
            renderDetail = showDetail
        }

        return (
            <div>
                {renderDetail}
            </div>
        )
    }
}

export default ToggleMenu;