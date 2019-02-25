import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
};


export default Root;

// <Provider /> is what makes redux store available to any nested components 
// that have been wrapped in 'connect()' function

// react-router-dom allows React to intercept GET request to a certain path before it hits the server
// To set-up the react router, simply encapsulate all components inside the BrowserRouter tag

// HashRouter vs. BrowerRouter
// https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter