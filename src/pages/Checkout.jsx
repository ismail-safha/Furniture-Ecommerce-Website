import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import "../styles/checkout.css";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { useSelector } from "react-redux";

const Checkout = () => {
  // add total qty redux
  const totalQty = useSelector((state) => state.cart.totlaQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title={"Checkout"}>
      <CommonSection title="Checkout " />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="form_info">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter you  name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter you  email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="strett address " />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount} </span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h6>Free shipping</h6>
                <h4>
                  Total Cost:<span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
