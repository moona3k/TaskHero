import React from 'react';
import NavBarContainer from '../nav_bar/navBar_container';
import SplashGuide from './splash_guide';
import SplashTestimonial from './splash_testimonial';
// import SplashBodyTop from './splash_body_top_container';
// import SplashBodyBottom from './splash_body_bottom_container';
import FooterNav from '../footer_nav';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-page">
                <NavBarContainer />
                <SplashGuide />
                <SplashTestimonial />
                <FooterNav />
            </div>
        )
    }
}

export default SplashPage;