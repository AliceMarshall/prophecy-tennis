import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactFlowProvider } from 'reactflow';

import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';

const Home = lazy(() => import('./components/pages/home'));
const Login = lazy(() => import('./components/pages/login'));
const Profile = lazy(() => import('./components/pages/profile'));
const Results = lazy(() => import('./components/pages/results'));
// const Layout = lazy(() => import('./components/layout'));

// const WithNavbar = () => (
//     <Layout>
//         <Routes>
//             <Route path='/login' render={Auth} />
//         </Routes>
//     </Layout>
// );

const App = () => {
    return (
        <Suspense fallback={<div className='app-loader'></div>}>
            <ReactFlowProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/prophecy-profile' element={<Profile />} />
                        <Route path='/results' element={<Results />} />
                    </Routes>
                </BrowserRouter>
            </ReactFlowProvider>
        </Suspense>
    );
};

export default App;
