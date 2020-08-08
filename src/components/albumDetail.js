import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default ({ image, title, url }) => {
  return (
    <Col md={4} xs={12}>
      <Card style={{ marginBottom: 15 }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Button href={url} variant="warning" target="_blank">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};