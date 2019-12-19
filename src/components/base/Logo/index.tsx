import React from 'react';
import './index.scss';

import logo from '../../../assets/img/logo.png';

const Logo: React.FC = () => {
    return (
        <div className="logoWrapper">
            <img src={logo} alt="Admix" className="logo" />
            Admix
        </div>
    );
};

export default Logo;
