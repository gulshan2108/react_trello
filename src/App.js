import React, { useState } from 'react';
import Board from 'react-trello'
import './App.css';
import Logo from './header-logo.png';
import Sidebar from './components/Sidebar';
import CustomCardForm from './components/CustomCardForm';
import { popoverUser } from './components/popoverUser';
import { popoverPublic } from './components/popoverPublic';
import { data } from './components/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Button,
    OverlayTrigger,
    Form,
    InputGroup,
    FormControl
} from 'react-bootstrap';


const App = () => {
    const [array, setArray] = useState(data)
    const [newArray, setNewArray] = useState(data)

    const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
        const dragArray = []
        array.lanes.forEach((item) => {
            var newCards = item.cards
            if (item.id == targetLaneId) {
                newCards.splice(position, 0, cardDetails)
            }
            if (item.id == sourceLaneId) {
                var deleteCard = newCards.filter((card) => card.id != cardId)
                newCards = deleteCard
            }
            var obj = {
                id: item.id,
                title: item.title,
                cards: newCards
            }
            dragArray.push(obj)
        })
        var finalDrageData = { lanes: dragArray }

        setArray(finalDrageData)
    }


    const onCardAdd = (card, laneId) => {
        const addCardArray = []
        array.lanes.map((item) => {
            var newCards = item.cards
            if (item.id == laneId) {
                newCards.push(card)
            }
            var obj = {
                id: item.id,
                title: item.title,
                cards: newCards
            }
            addCardArray.push(obj)
        })
        var finalAddesData = { lanes: addCardArray }
        setArray(finalAddesData)
        setNewArray(finalAddesData)

    }
    const onDataChange=(newData)=>{
        setNewArray(newData)
    }

    const handleSearch = (e) => {
        const searchedArray = []
        array.lanes.map((values) => {
            const filteredRows = values.cards.filter((item) => {
                return item.title.toLowerCase().includes(e.target.value) || item.status.toLowerCase().includes(e.target.value);
            });
            var obj = {
                id: values.id,
                title: values.title,
                cards: filteredRows
            }
            searchedArray.push(obj)
        })
        var finalData = { lanes: searchedArray }
        setNewArray(finalData)
    };

    const CustomCard = ({ title, status }) => {
        return (
            <div className="kanban-card-inner">
                <span className={`card-label ${status == "CP" ? "cp-label" : "fault-label"} `}>{status?status:'Fault'}</span>
                <h3 className="card-title">{title}</h3>
            </div>
        )
    }
    return (
        <div className="kanban-board-page">
            {/* Header starts */}
            <Container fluid>
                <Row className="justify-content-between align-items-center">
                    <Navbar expand="lg" className="kanban-header">
                        <Col lg={4} className="logo-box">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="">Home</Nav.Link>
                                    <Nav.Link href="#">Tour</Nav.Link>
                                    <Nav.Link href="#">Blog</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col lg={4} className="text-center logo-col">
                            <Navbar.Brand href="#home">
                                <img src={Logo} alt="logo" />
                            </Navbar.Brand>
                        </Col>
                        <Col lg={4} className="text-end">
                            <Button variant="primary">Sign up</Button>
                            <Button variant="secondary">Log in</Button>
                        </Col>
                    </Navbar>
                </Row>
            </Container>
            {/* Header ends */}

            {/* Sign up free starts */}
            <div className="sign-up-free">
                <h4>
                    Visually collaborate with anyone, anywhere.
                    <Button variant="secondary">Sign up for free</Button>
                </h4>
            </div>
            {/* Sign up free ends */}

            {/* Board heading starts */}
            <section className="board-header">
                <Container fluid>
                    <Row className="justify-content-between">
                        <Col lg={6} sm={6}>
                            <ul className="title-ul">
                                <li>
                                    <h4 className="header-title">Kanban Board</h4>
                                </li>
                                <li className="divider">|</li>
                                <li>
                                    <OverlayTrigger trigger="click" rootClose  placement="bottom" overlay={popoverPublic}>
                                        <Button variant="primary" className="ic-dropdown">
                                            <FontAwesomeIcon icon={faGlobeAsia} />
                                            Public
                                        </Button>
                                    </OverlayTrigger>
                                </li>
                                <li className="divider">|</li>
                                <li>
                                    <Form className="d-flex">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Search by name, status"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                onChange={(e) => handleSearch(e)}
                                            />
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                        </InputGroup>
                                    </Form>
                                </li>
                                <li className="divider">|</li>
                                <li>
                                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverUser}>
                                        <Button variant="primary" className="ic-dropdown btn-user">
                                            AH
                                        </Button>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={4} sm={6} className="text-end">
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
            </section>
            {newArray.lanes.length>0 &&
            <Board 
                data={newArray}
                laneDraggable={false}	
                hideCardDeleteIcon={false}
                onDataChange={onDataChange}
                editable
                draggable
                onCardAdd={(card, laneId) => onCardAdd(card, laneId)}
                handleDragEnd={ handleDragEnd}
                components={{
                    NewCardForm: CustomCardForm,
                    Card: CustomCard
                }}
            />
            }
        </div>
    )
}
export default App;
