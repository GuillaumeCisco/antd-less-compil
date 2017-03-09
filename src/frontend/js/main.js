/* globals document */

import 'babel-core/register';
import 'babel-polyfill';

import FastClick from 'fastclick';
import React from 'react';
import {render} from 'react-dom';
import {createRenderer} from 'fela';
import {Provider} from 'react-fela';
import {withAsyncComponents} from 'react-async-component';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppContainer} from 'react-hot-loader';
// import whyDidYouUpdate from 'why-did-you-update';

import Root from './app/Root/index';

FastClick.attach(document.body);
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const root = document.getElementById('root');
const renderer = createRenderer();
const mountNode = document.getElementById('stylesheet');

const renderApp = (RootElement) => {
    const app = (<AppContainer key={Math.random()}>
        <Provider renderer={renderer} mountNode={mountNode}>
            <RootElement />
        </Provider>
    </AppContainer>);

    withAsyncComponents(app).then((result) => {
        const {appWithAsyncComponents} = result;
        render(appWithAsyncComponents, root);
    });
};


if (process.env.NODE_ENV !== 'production') {
    // whyDidYouUpdate(React, {include: /^Create/});
    // whyDidYouUpdate(React, {exclude: /^AsyncComponent|ListItem|^LogMonitor|^DockMonitor|^FilterMonitor|^JSONNestedNode|^JSONTree|^Overlay|^TouchRipple|^EnhancedButton|^IconButton|^Toolbar|^SvgIcon|^ContentAdd|^Flat|^AutoLock|^Card|^Paper|^ContentClear|^ContentCreate|syncWarnings$|^RaisedButton/});
    if (module.hot) {
        module.hot.accept('./app/Root/index', () =>
            System.import('./app/Root/index').then(module =>
                renderApp(module.default),
            ),
        );
    }
    renderApp(Root);
}
else {
    const app = (<Provider renderer={renderer} mountNode={mountNode}>
        <Root />
    </Provider>);

    withAsyncComponents(app).then((result) => {
        const {appWithAsyncComponents} = result;
        render(appWithAsyncComponents, root);
    });
}
