import React from 'react';

const footerNav = () => {
    return (
        <div className="footer-nav">
            <div>
                <strong>Discover</strong>
                <a>Become a Tasker</a>
                <a>Services by City</a>
                <a>All Services</a>
                <a>Buy a Gift Card</a>
                <a>Elite Taskers</a>
                <a>Help</a>
            </div>
            <div>
                <strong>Company</strong>
                <a>About us</a>
                <a>Careers</a>
                <a>Press</a>
                <a>TaskHero for Good</a>
                <a>Blog</a>
                <a>Terms & Privacy</a>
            </div>
            <div>
                <strong>Learn More</strong>
                <a href="https://www.linkedin.com/in/moon-daniel/"><img className="footer-icon" src="../../app/assets/images/linkedin-icon.png" /></a>
                <a href="https://github.com/moona3k"><img className="footer-icon" src="../../app/assets/images/github-icon.jpg" /></a>
            </div>
        </div>
    )
}

export default footerNav;