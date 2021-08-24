import React, { useState } from 'react';
import {Button,Form} from 'react-bootstrap';



const CustomCardForm = (props) => {
    const [state, setState] = useState({ title: "", status: "" })
    const handleAdd = () => {
        props.onAdd({ title: state.title, status: state.status })
    }
    const handleCancel = () => {
        props.onCancel()
    }

    return (
        <div>
            <Form className="add-card">
                <Form.Group className="mb-2">
                    <Form.Select aria-label="Default select example" className="form-control" onChange={(e) => { setState({ ...state, status: e.target.value }) }}>
                        <option  >Status</option>
                        <option value="CP">CP</option>
                        <option value="Fault">Fault</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Enter title" onChange={(e) => { setState({ ...state, title: e.target.value }) }} />
                </Form.Group>
            </Form>
            <div className="btn-group">
                <Button variant="primary" type="click" onClick={handleAdd} >Add</Button>
                <Button variant="danger" type="click" onClick={handleCancel}>Cancel</Button>
            </div>
        </div>
    )
}
export default CustomCardForm