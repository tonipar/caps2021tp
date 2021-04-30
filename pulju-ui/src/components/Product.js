import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const SrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const ProductEl = styled.section`
  outline: 1px solid red;
  padding: 1rem;
  min-width: 16.5rem;
  height: 16.5rem;
  margin: 1rem;

  @media only screen and (max-width: 695px) {
    width: 100%;
    height: initial;
    margin: 1rem 0;
  }
`;
const ProductName = styled.div`
  font-weight: bold;
  line-height: 1.5rem;
`;
const ProductPrice = styled.div`
  font-size: 1.5rem;
`;
const ProductDetail = styled.div`
  margin-bottom: 0.5em;
`;
const ProductStorage = styled.div`
  line-height: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
`;

export default function Product(props) {
  const { name, detail, price, images, deliveryTime } = props;
  return (
    <ProductEl aria-label={name}>
      <Image src={images.list} alt={images.alt} />
      <div>
        <SrOnly>{`${name}, ${detail}`}</SrOnly>
        <Wrapper>
          <ProductName aria-hidden>{name}</ProductName>
          <ProductPrice aria-hidden>{price}€</ProductPrice>
        </Wrapper>
        <ProductDetail aria-hidden>{detail}</ProductDetail>
        <Wrapper>
          <ProductStorage aria-hidden>
            Toimitusaika: {deliveryTime || "heti"}
          </ProductStorage>
          <Button
            intent="secondary"
            aria-label={`Lisää ostoskoriin ${name}, hinta ${price}€, Tuotetta on saatavilla ${
              deliveryTime || "heti"
            }`}
            label="Osta"
          />
        </Wrapper>
      </div>
    </ProductEl>
  );
}
