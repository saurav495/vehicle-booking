import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { addVehicle } from "../apis/vehicleApi";

const AddVehicle = () => {
    const [vehicle, setVehicle] = useState({
        name: "",
        type: "",
        capacity: "",
        rentalPricePerDay: "",
        tyers: "",
        imageUrl: ""
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addVehicle(vehicle);
            setMessage({ type: "success", text: "Vehicle added successfully!" });
            setVehicle({ name: "", type: "", capacity: "", rentalPricePerDay: "", tyers: "", imageUrl: "" });
        } catch (error) {
            setMessage({ type: "danger", text: "Error adding vehicle." });
        }
    };

    return (
        <Container className="my-4">
            <h2>Add Vehicle</h2>
            {message && <Alert variant={message.type}>{message.text}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Vehicle Name</Form.Label>
                    <Form.Control type="text" name="name" value={vehicle.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" name="type" value={vehicle.type} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Capacity (Seats)</Form.Label> {/* BEGIN: Updated label */}
                    <Form.Control type="number" name="capacity" value={vehicle.capacity} onChange={handleChange} required /> {/* END: Updated label */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rental Price / Day</Form.Label>
                    <Form.Control type="number" name="rentalPricePerDay" value={vehicle.rentalPricePerDay} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tyres</Form.Label>
                    <Form.Control type="text" name="tyers" value={vehicle.tyers} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={vehicle.imageUrl} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" variant="primary">Add Vehicle</Button>
            </Form>
        </Container>
    );
};


export default AddVehicle;
