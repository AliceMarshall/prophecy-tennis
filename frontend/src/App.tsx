import React, { Suspense, lazy } from 'react';
import { ReactFlowProvider } from 'reactflow';

import './css/style.css';
import './css/skeleton.css';
import './css/normalize.css';

const Home = lazy(() => import('./components/pages/home'));
const Base = lazy(() => import('./components/pages/base'));

const App = () => {
    return (
        <Suspense fallback={<div className='app-loader'></div>}>
            <ReactFlowProvider>
                <Base />
            </ReactFlowProvider>
        </Suspense>
    );
};

export default App;
