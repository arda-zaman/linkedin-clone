import React from 'react';
import { LogoSmall, ProfileImage } from '../assets/files';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faSearch, faCaretDown, faTh } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import { Divider } from '../fields';

const menuItems = [
    { text: 'Home',
icon: faHome,
URL: '/' },
    { text: 'My Network',
icon: faUserFriends,
URL: '/mynetwork' },
    { text: 'Jobs',
icon: faBriefcase,
URL: '/jobs' },
    { text: 'Messaging',
icon: faCommentDots,
URL: '/messaging' },
    { text: 'Notifications',
icon: faBell,
URL: '/notifications' },
];

const Header = () => {
    return (
        <header>
            <div className="container h-inherit">
                <div className="header-wrapper d-flex justify-between">
                    <div className="left-side">
                        <LogoSmall className="logo-icon" />
                        <div className="main-search-area">
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>

                    <nav className="right-side">
                        {menuItems.map((item, index) => (
                            <NavLink to={item.URL} className="menu-item" key={index}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </NavLink>
                        ))}

                        <div className="menu-item">
                            <img src={ProfileImage} />
                            <span>Me <FontAwesomeIcon icon={faCaretDown} /></span>
                        </div>

                        {/* DIVIDER */}
                        <Divider orientation="vertical" />

                        <div className="menu-item">
                            <FontAwesomeIcon icon={faTh} />
                            <span>Work <FontAwesomeIcon icon={faCaretDown} /></span>
                        </div>

                        <div className="menu-item">
                            <Link className="link-text" to="#">Try Premium for Free</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;