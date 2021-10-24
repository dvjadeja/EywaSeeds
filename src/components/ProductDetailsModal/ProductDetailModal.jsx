import React from "react";
import { Modal, Button } from "react-bootstrap";
import Ajwain from "../../images/ajwain/eva-p1.png";

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
          <Modal.Title id="contained-modal-title-vcenter">Ajwain</Modal.Title>
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
                src={Ajwain}
                alt="ajwain"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div style={{ fontSize: "0.8rem", padding: 10 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              Ajwain seeds offer numerous health benefits, have a bitter,
              pungent taste,and are highest quality spice and a delightful
              addition to any meal, complimentary to vegan and vegetarian
              lifestyles.
            </p>
            <div>
              <p>
                1) Rich in fiber, minerals, vitamins and antioxidants. It can
                even be chewed raw, added to water or tea.
              </p>
              <p>
                2)One of the most famous ingredient in many Indian Recipes such
                as pooris, kachoris, rasam, kadhi, etc.. Ajwain is used in
                making various types of Parathas, roti, bread, etc.
              </p>
              <p>
                3) Believed to help in acidity, constipation, digestion, and to
                have carminative Properties.
              </p>
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
