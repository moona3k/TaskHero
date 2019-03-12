import React from 'react';

import NavBarContainer from '../nav_bar/navBar_container';
import TaskBookingMainContainer from './task_booking_main_container';
// import TaskBookingSub from './task_booking_sub';
import FooterNav from '../footer_nav';
import MyTasksContainer from './my-tasks-redux';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
    }

    // componentDidMount(){
        
    //     const deleteEmptyTasks = () => {
    //         return $.ajax({
    //         url: '/api/tasks/empty',
    //         method: 'DELETE',
    //         })
    //     };

    //     deleteEmptyTasks();
    // }

    render(){
        return (
            <div className="dashboard-container">
                <NavBarContainer />
                <TaskBookingMainContainer />
                {/* <TaskBookingSub /> */}
                <MyTasksContainer />
                <FooterNav />
            </div>
        )
    }
}

export default Dashboard;