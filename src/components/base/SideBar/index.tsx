import React from 'react';
import './index.scss';

import Logo from '../Logo';
import Nav from '../Nav';

import nav from '../../../constants/nav';

const SideBar: React.FC = () => {
    return (
        <div className="sideBar">
            <Logo />
            <Nav nav={nav} />
        </div>
    );
};

export default SideBar;
