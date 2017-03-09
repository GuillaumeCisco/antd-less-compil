import {Route} from 'react-router';
import React, {PropTypes} from 'react';

import {createAsyncComponent} from 'react-async-component';

const AsyncApp = createAsyncComponent({resolve: () => System.import('./App')});


const Routes = () =>
    <div id="routes">
        <Route path="/" component={AsyncApp} />
    </div>;

export default Routes;
