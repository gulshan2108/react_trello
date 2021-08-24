import { Popover,} from 'react-bootstrap';
import { faCheck, faGlobeAsia, faLock, faTimes, faUserFriends, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const popoverPublic = (
    <Popover className="kanban-popover-1">
        <Popover.Header as="h3">
            Visibility
           
        </Popover.Header>
        <Popover.Body>
            <ul className="pop-over-list">
                <li>
                    <FontAwesomeIcon icon={faLock} />
                    <span>Private</span>
                    <h5>Only board members can see and edit this board.</h5>
                </li>
                <li>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span>Workspace </span>
                    <h5>All members of the Workspace can see and edit this board. The board must be added to a Workspace to enable this.</h5>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span>Organization </span>
                    <h5>All members of the organization can see this board. The board must be added to an enterprise Workspace to enable this.</h5>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGlobeAsia} />
                    <span>Public </span>
                    <FontAwesomeIcon icon={faCheck} />
                    <h5>Anyone on the internet (including Google) can see this board. Only board members can edit.</h5>
                </li>
            </ul>
        </Popover.Body>
    </Popover>
);