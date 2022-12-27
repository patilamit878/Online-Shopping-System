import React from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import { FiPhoneCall } from 'react-icons/fi'
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'

const ContactUs = () => {
  return (
    <>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={6}>
            <h1>Online Shop</h1>
            <p>
              {' '}
              Whether you are a restaurant in need of a booking system, an
              online magazine that wants to sell subscriptions, or a musician
              ready to drop your latest track, our Commerce platform supports
              the way you do business.Whether you are a restaurant in need of a
              booking system, an online magazine that wants to sell
              subscriptions, or a musician ready to drop your latest track, our
              Commerce platform supports the way you do business.Whether you are
              a restaurant in need of a booking system, an online magazine that
              wants to sell subscriptions, or a musician ready to drop your
              latest track, our Commerce platform supports the way you do
              business. Whether you are a restaurant in need of a booking
              system, an online magazine that wants to sell subscriptions, or a
              musician ready to drop your latest track, our Commerce platform
              supports the way you do business.Whether you are a restaurant in
              need of a booking system, an online magazine that wants to sell
              subscriptions, or a musician ready to drop your latest track, our
              Commerce platform supports the way you do business.Whether you are
              a restaurant in need of a booking system, an online magazine that
              wants to sell subscriptions, or a musician ready to drop your
              latest track, our Commerce platform supports the way you do
              business.
            </p>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --Contact Details--
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-657441111</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>065657441111</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>help@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/10/Istanbul-Cevahir-e1629224337449.jpg"
              style={{ width: '100%', height: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactUs
