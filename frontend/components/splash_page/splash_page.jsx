import React from 'react';

import NavBarContainer from '../nav_bar/navBar_container';
import SplashMain from './splash_main_container';
import SplashSuggestion from './splash_suggestion_container';
import SplashGuide from './splash_guide';
import SplashTestimonial from './splash_testimonial';
import FooterNav from '../footer_nav';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-page">
                <NavBarContainer />
                <SplashMain />
                <SplashSuggestion />
                <SplashGuide />
                <SplashTestimonial />
                <FooterNav />
            </div>
        )
    }
}

export default SplashPage;