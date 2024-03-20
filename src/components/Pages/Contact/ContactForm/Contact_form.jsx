import React from "react"; 
import '../ContactForm/Contact_style.css';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option"
import { motion } from "framer-motion";

export default function ContactUs() {
  

  return (
      <Container>
        <Row className="mb-5 mt-3 justify-content-center justify-content-xxl-start">
          <Col lg="8" md="10">
            <motion.h1 
            initial={{ y: -250 }} 
            animate={{ y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            className="my-5 title">CONTACT US</motion.h1>
            <hr />
          </Col>
        </Row>
        <Row className="sec_sp justify-content-center justify-content-xxl-start">
          <Col xl="5" lg="8" md="10" className="mb-5">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
            </motion.div>
          </Col>
          <Col  lg="6" md="10" className="d-flex align-items-center">
            <motion.form  
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{type: "spring", stiffness: 50, duration: 0.5, delay: 0.5 }}
            className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <motion.button 
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)"
                  }}
                  transition={{ duration: 0.05 }}
                  className="btn ac_btn" type="submit"> 
                  Send
                  </motion.button>
                </Col>
              </Row>
            </motion.form>
          </Col>
        </Row>
      </Container>
  );
}