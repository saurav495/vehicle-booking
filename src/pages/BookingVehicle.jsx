import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, handleClose, vehicle, formData, setFormData, handleConfirmBooking }) => {
    if (!vehicle) return null; // no vehicle selected

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Book {vehicle.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>From Pincode</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.fromPincode}
                            onChange={(e) => setFormData({ ...formData, fromPincode: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>To Pincode</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.toPincode}
                            onChange={(e) => setFormData({ ...formData, toPincode: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={formData.startTime}
                            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirmBooking}>
                    Confirm Booking
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BookingModal;
