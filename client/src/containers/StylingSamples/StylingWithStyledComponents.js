import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  font-size: 15px;
`;
const SubSectionContainer = styled(SectionContainer)`
  margin: 0 -1em;
  > * {
    flex: 1;
    min-width: 0;
    padding: 0 1em;
  }
`;
const Section = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0 1em;
`;
const InputGroup = styled.div`
  margin-bottom: 1em;
  ${(props) => props.error && "color: red;"}
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  white-space: nowrap;
`;
const Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 0.5em 1em;
  box-sizing: border-box;
`;
const Select = styled.select`
  width: 100%;
  font-size: 1em;
  padding: 0.5em 1em;
  box-sizing: border-box;
`;

function StylingWithStyledComponents(props) {
  return (
    <form>
      <SectionContainer>
        <Section>
          <h3>Billing Address</h3>
          <InputGroup error="Virhe!!!">
            <Label htmlFor="fullname">Full Name</Label>
            <Input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="address">Address</Label>
            <Input type="text" name="address" placeholder="Länsikatu 15" />
          </InputGroup>
          <SubSectionContainer>
            <InputGroup>
              <Label htmlFor="city">City</Label>
              <Input type="text" name="city" placeholder="Joensuu" />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="zip">Zip</Label>
              <Input type="text" name="zip" placeholder="80110" />
            </InputGroup>
          </SubSectionContainer>
        </Section>

        <Section>
          <h3>Payment</h3>
          <InputGroup>
            <Label htmlFor="cardType">Select Card</Label>
            <Select name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="cardNumber">Credit card number</Label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </InputGroup>
          <SubSectionContainer>
            <InputGroup>
              <Label htmlFor="cardExpMonth">Exp Month</Label>
              <Input type="number" name="cardExpMonth" placeholder="06" />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="cardExpYear">Exp Year</Label>
              <Input type="number" name="cardExpYear" placeholder="2020" />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="cardCvv">CVV</Label>
              <Input type="text" name="cardCvv" placeholder="123" />
            </InputGroup>
          </SubSectionContainer>
        </Section>
      </SectionContainer>
    </form>
  );
}

export default StylingWithStyledComponents;
