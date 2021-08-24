import { Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export const popoverUser = (
    <Popover className="kanban-popover-1 user-popover">
        <Popover.Header as="h3">
            <div className="user-initial">
                Ah
            </div>
            <div className="user-text">
                Andrew Hyde
                <span>@andrewhyde</span>
            </div>
           
        </Popover.Header>
        <Popover.Body>
            <ul className="pop-over-list">
                <li>
                    <span>Change permissions… <span className="light">(Admin)</span></span>
                </li>
                <li className="pointer-yes">
                    <a className="user-link">
                        View member’s board activity
                    </a>
                </li>
            </ul>
        </Popover.Body>
    </Popover>
);