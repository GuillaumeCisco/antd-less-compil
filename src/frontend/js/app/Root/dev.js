import React, {PropTypes} from 'react';
import {Router} from 'react-router';

import Routes from '../routes';
import History from '../history/dev';

const Root = () => {
    return (
        <Router history={History}>
            <Routes/>
        </Router>);
};

export default Root;
