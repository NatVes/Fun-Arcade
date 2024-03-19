import React from 'react';
import ContactUs from './ContactForm/Contact_form.jsx'; // Make sure the path is correct

export default function Contact() {
  return (
    <div  className="game-containers ">
      <ContactUs /> {/* This will render your contact form */}
    </div>
  );
}