import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { FaUser, FaEnvelope, FaRegAddressCard, FaCity } from "react-icons/fa";

function StylingWithBootsrap(props) {
  return (
    <Form>
      <Row>
        <Col>
          <h3>Billing Address</h3>
          <FormGroup>
            <Label htmlFor="fullname">
              <FaUser /> Full Name
            </Label>
            <Input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">
              <FaEnvelope /> Email
            </Label>
            <Input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">
              <FaRegAddressCard /> Address
            </Label>
            <Input type="text" name="address" placeholder="Länsikatu 15" />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="city">
                  <FaCity /> City
                </Label>
                <Input type="text" name="city" placeholder="Joensuu" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="zip">Zip</Label>
                <Input type="text" name="zip" placeholder="80110" />
              </FormGroup>
            </Col>
          </Row>
        </Col>

        <Col>
          <h3>Payment</h3>
          <FormGroup>
            <Label htmlFor="cardType">Select Card</Label>
            <Input type="select" name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cardNumber">Credit card number</Label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="cardExpMonth">Exp Month</Label>
                <Input type="number" name="cardExpMonth" placeholder="06" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="cardExpYear">Exp Year</Label>
                <Input type="number" name="cardExpYear" placeholder="2020" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="cardCvv">CVV</Label>
                <Input type="text" name="cardCvv" placeholder="123" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default StylingWithBootsrap;
