import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { INavItem } from '../../../types';

interface INavProps {
    nav: INavItem[];
}

const Nav = ({ nav }: INavProps) => {
    return (
        <nav>
            {nav.map(({ title, link, image }, i) => (
                <Link to={`${link}`} className="item" key={`${title}-${i}`}>
                    <img
                        src={`${image}`}
                        alt={`${title}`}
                        className="navIcon"
                    />
                    <span>{title}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
