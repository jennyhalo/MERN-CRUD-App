// Tuodaan react
import React, { useState, useEffect } from "react";
// Tuodaan axios
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FlavourForm = () => {
  const [formData, setFormData] = useState({
    Flavour: "",
    Description: "",
    Image: "",
  });

  const { Flavour, Description, Image } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    const newFlavour = {
      Flavour: Flavour,
      Description: Description,
      Image: Image,
    };
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newFlavour);
      await axios.post("/api/add", body, config);
      setFormData({
        Flavour: "",
        Description: "",
        Image: "",
      });
      window.location.reload();
    } catch (err) {
      console.error("error", err.response.data);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Form className="flavour-form" onSubmit={(e) => onSubmit(e)}>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridFlavour">
          <Form.Label>Flavour</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter flavour"
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridImage">
          <Form.Label>Image src</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter an image"
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
      </Row>
      <Button type="submit" variant="primary">
        Add new flavour
      </Button>
    </Form>
  );
};
export default FlavourForm;
