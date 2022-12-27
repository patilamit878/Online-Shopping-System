import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <>
      <Container style={{ marginTop: '50px' }}>
        <h1>Who we are</h1>
        <p>
          No matter the size of your online store, product descriptions play a
          key role in your ecommerce business. Effective product descriptions
          can possibly lure potential customers. Good product descriptions can
          potentially influence a purchase decision. Great product descriptions
          can ultimately help improve conversion rates and increase sales, as
          well as boost your visibility and SEO on paid channels. The technical
          details, including the use of power words and A/B tests, can be the
          difference between a potential buyer on your ecommerce website and
          those customers shopping at a competitor with similar products.
        </p>
        <h1>Our speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              No matter the size of your online store, product descriptions play
              a key role in your ecommerce business. Effective product
              descriptions can possibly lure potential customers. Good product
              descriptions can potentially influence a purchase decision.
            </p>
          </Col>
          <Col md={6}>
            <p>
              No matter the size of your online store, product descriptions play
              a key role in your ecommerce business. Effective product
              descriptions can possibly lure potential customers. Good product
              descriptions can potentially influence a purchase decision.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our cheif</h1>
          <Col md={3}>
            No matter the size of your online store, product descriptions play a
            key role in your ecommerce business. Effective product descriptions
            can possibly lure potential customers. Good product descriptions can
            potentially influence a purchase decision.
          </Col>
          <Col md={3}>
            No matter the size of your online store, product descriptions play a
            key role in your ecommerce business. Effective product descriptions
            can possibly lure potential customers. Good product descriptions can
            potentially influence a purchase decision.
          </Col>
          <Col md={3}>
            No matter the size of your online store, product descriptions play a
            key role in your ecommerce business. Effective product descriptions
            can possibly lure potential customers. Good product descriptions can
            potentially influence a purchase decision.
          </Col>
          <Col md={3}>
            No matter the size of your online store, product descriptions play a
            key role in your ecommerce business. Effective product descriptions
            can possibly lure potential customers. Good product descriptions can
            potentially influence a purchase decision.
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutUs
