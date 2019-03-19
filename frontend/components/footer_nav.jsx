import React from 'react';

const footerNav = () => {
    return (
        <div className="footer-nav">
            <div>
                <strong>Discover</strong>
                <a className="footer-hover">Become a Tasker</a>
                <a className="footer-hover">Services by City</a>
                <a className="footer-hover">All Services</a>
                <a className="footer-hover">Buy a Gift Card</a>
                <a className="footer-hover">Elite Taskers</a>
                <a className="footer-hover">Help</a>
            </div>
            <div>
                <strong>Company</strong>
                <a className="footer-hover">About us</a>
                <a className="footer-hover">Careers</a>
                <a className="footer-hover">Press</a>
                <a className="footer-hover">TaskHero for Good</a>
                <a className="footer-hover">Blog</a>
                <a className="footer-hover">Terms & Privacy</a>
            </div>
            <div className="footer-learn-more-box">
                <strong className="footer-learn-more-text">Contact Us</strong>
                <a href="https://www.linkedin.com/in/moon-daniel/"><img className="footer-icon" src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"/></a>
                <a href="https://github.com/moona3k"><img className="footer-icon" src="https://image.flaticon.com/icons/svg/61/61109.svg" /></a>
            </div>
        </div>
    )
}

export default footerNav;