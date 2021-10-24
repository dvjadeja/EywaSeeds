import React, { useState } from "react";
// import Icon1 from "../../images/eva-p1.png";
// import Icon2 from "../../images/svg-5.svg";
// import Icon3 from "../../images/svg-6.svg";
import { ProductData } from "../../utils/ProductData";
import ProductDetailModal from "../ProductDetailsModal/ProductDetailModal";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <ProductDetailModal show={modalShow} onHide={() => setModalShow(false)} />
      <ServicesContainer id="services">
        <ServicesH1>Our Products</ServicesH1>
        <ServicesWrapper>
          {ProductData.map((data, index) => (
            <ServicesCard key={index} onClick={() => setModalShow(true)}>
              <ServicesIcon src={data.img} />
              <ServicesH2>{data.name}</ServicesH2>
              <ServicesP>Click to see Product Information</ServicesP>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
