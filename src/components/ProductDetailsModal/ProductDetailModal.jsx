import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductDetailModal = (props) => {
  const { data } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ height: 300, width: 300 }}>
              <img
                src={data?.img}
                alt="ajwain"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div style={{ fontSize: "0.8rem", padding: 10 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 600 }}>{data?.desc}</p>
            <div>
              <p>1) {data?.p1}</p>
              <p>2) {data?.p2}</p>
              <p>3) {data?.p3}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Button variant="outline-primary" href="tel:9879891815">
              Call
            </Button>{" "}
            <Button
              variant="outline-success"
              href="https://api.whatsapp.com/send/?phone=919879891815&text&app_absent=0"
              target="_blank"
              aria-label="whatsapp"
            >
              Whatsapp Order
            </Button>{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {data?.btn.map((data, index) => (
              <Button
                key={index}
                variant="success"
                className="me-1"
                href={data?.link}
                target="_blank"
                aria-label={data?.weight}
              >
                {data.weight}
              </Button>
            ))}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetailModal;
