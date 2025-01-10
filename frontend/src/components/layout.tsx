import React from 'react';
import Navbar from '../components/navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
    <div>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;
