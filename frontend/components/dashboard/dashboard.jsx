import React from 'react';

import NavBarContainer from '../nav_bar/navBar_container';
import TaskBookingMain from './task_booking_main';
import TaskBookingSub from './task_booking_sub';
import FooterNav from '../footer_nav';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="dashboard-container">
                <NavBarContainer />
                <TaskBookingMain />
                <TaskBookingSub />
                {/* <MyTaskList /> */}
                <FooterNav />
            </div>
        )
    }
}

export default Dashboard;