import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes, faEllipsisH, faSearch, faColumns, faListUl } from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap';


const Sidebar = (props) => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className="sidebar-box">
            <Button variant="primary" className="show-menu-btn" onClick={handleToggle}>
                <FontAwesomeIcon icon={faEllipsisH} />
                Show menu
            </Button>
            <div className={`show-menu-sidebar ${isActive ? "active" : ""}`}>
                <div className="sidebar-header">
                    <h4 className="side-title">Menu</h4>
                    <a className="close" onClick={() => setActive(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </div>
                <div className="sidebar-body">
                    <ul className="board-menu-nav">
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faColumns} className="icon-nav" />
                                About this board
                            </a>
                        </li>
                        <li>
                            <a>
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-nav" />
                                More
                            </a>
                        </li>
                        <hr></hr>
                    </ul>

                    <div className="activity-tab">
                        <h4>
                            <FontAwesomeIcon icon={faListUl} className="icon" />
                            Activity
                        </h4>
                        <ul className="activity-list">
                            <li>
                                <div className="initial-circle">
                                    <a className="user-initial">
                                        Ah
                                    </a>
                                </div>
                                <div>
                                    <h4 className="activity-text">
                                        <a className="name">Andrew Hyde</a> made this board visible to the public
                                    </h4>
                                    <span className="activity-time">
                                        Mar 13, 2012 at 8:51 PM
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="initial-circle">
                                    <a className="user-initial">
                                        Ah
                                    </a>
                                </div>
                                <div>
                                    <h4 className="activity-text">
                                        <a className="name">Andrew Hyde</a> made this board visible to the public
                                    </h4>
                                    <span className="activity-time">
                                        Mar 13, 2012 at 8:51 PM
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="initial-circle">
                                    <a className="user-initial">
                                        Ah
                                    </a>
                                </div>
                                <div>
                                    <h4 className="activity-text">
                                        <a className="name">Andrew Hyde</a> made this board visible to the public
                                    </h4>
                                    <span className="activity-time">
                                        Mar 13, 2012 at 8:51 PM
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="initial-circle">
                                    <a className="user-initial">
                                        Ah
                                    </a>
                                </div>
                                <div>
                                    <h4 className="activity-text">
                                        <a className="name">Andrew Hyde</a> made this board visible to the public
                                    </h4>
                                    <span className="activity-time">
                                        Mar 13, 2012 at 8:51 PM
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="initial-circle">
                                    <a className="user-initial">
                                        Ah
                                    </a>
                                </div>
                                <div>
                                    <h4 className="activity-text">
                                        <a className="name">Andrew Hyde</a> made this board visible to the public
                                    </h4>
                                    <span className="activity-time">
                                        Mar 13, 2012 at 8:51 PM
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            )
}
            export default Sidebar