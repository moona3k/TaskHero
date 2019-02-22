import React from 'react';

const TaskBookingMain = () => {
    return (
        <div className="dashboard-search-container">
            <div className="dashboard-search-container-inner">
                <div className="dashboard-search-content">
                    <div className="dashboard-search-content-top">
                        <h1 className="dashboard-search-header">Book Your Next Task</h1>
                        <div><br/>Search Bar Component Will Render Here</div>
                    </div>
                    <div className="dashboard-search-content-bottom">
                        <ul className="dashboard-search-content-bottom-container">
                            <a><button className="task-category-button">Moving</button></a>
                            <a><button className="task-category-button">Plumbing</button></a>
                            <a><button className="task-category-button">Mounting</button></a>
                            <a><button className="task-category-button">Home Repairs</button></a>
                            <a><button className="task-category-button">Cleaning</button></a>
                        </ul>
                        <ul className="dashboard-search-content-bottom-container">
                            <a><button className="task-category-button">Furniture Assembly</button></a>
                            <a><button className="task-category-button">Heavy Lifting</button></a>
                            <a><button className="task-category-button">Yard Work</button></a>
                            <a><button className="task-category-button">Wait in Line</button></a>
                            <a><button className="task-category-button">Event Staffing</button></a>
                        </ul>
                        <div>See More</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TaskBookingMain;

