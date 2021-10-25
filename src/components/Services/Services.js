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
  const [tempData, setTempData] = useState([]);
  const getData = (img, title, desc, p1, p2, p3) => {
    let tempData = [img, title, desc, p1, p2, p3];
    setTempData((item) => [1, ...tempData]);
  };
  return (
    <>
      <ProductDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={tempData[1]}
        title={tempData[2]}
        desc={tempData[3]}
        p1={tempData[4]}
        p2={tempData[5]}
        p3={tempData[6]}
      />
      <ServicesContainer id="services">
        <ServicesH1>Our Products</ServicesH1>
        <ServicesWrapper>
          {ProductData.map((data, index) => (
            <ServicesCard
              key={index}
              onClick={() => {
                getData(
                  data.img,
                  data.name,
                  data.desc,
                  data.p1,
                  data.p2,
                  data.p3
                );
                setModalShow(true);
              }}
            >
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
