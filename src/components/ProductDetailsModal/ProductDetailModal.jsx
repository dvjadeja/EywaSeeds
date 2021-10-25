import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductDetailModal = (props) => {
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
            {props.title}
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
                src={props.img}
                alt="ajwain"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div style={{ fontSize: "0.8rem", padding: 10 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 600 }}>{props.desc}</p>
            <div>
              <p>1) {props.p1}</p>
              <p>2) {props.p2}</p>
              <p>3) {props.p3}</p>
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
            <Button
              variant="success"
              className="me-1"
              href="https://www.amazon.in/Organic-Ajwain-Spices-Indian-Masala/dp/B09GW313NX/ref=sr_1_5?dchild=1&keywords=eywa%2Bseeds%2Bajwain&qid=1635048037&sr=8-5&th=1"
              target="_blank"
              aria-label="ajwain-1kg"
            >
              1 Kg
            </Button>{" "}
            <Button variant="success" className="me-1">
              2 Kg
            </Button>{" "}
            <Button variant="success">3 Kg</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetailModal;
