import React from 'react'
import Card from "../component/Card";
import { FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
const Contact = () => {
  const contactContent = [
    {
      title: "CALL US",
      description: "+977 9852079737",
      image: <FaPhone />,
    },
    {
      title: "OFFICE LOCATION",
      description: "Hanuman Das Marg, Biratnagar",
      image: <FaMapMarkerAlt />,
    },
    {
      title: "EMAIL",
      description: "contact@velociscore.com",
      image: <FaGlobe/>,
    },
  ];
  return (
    <>
      <div className="contact-container">
        <div className="contact-intro">
          <h3>CONTACT US</h3>
          <p>If You Have Any Query, Please Contact Us</p>
        </div>
        <div classtitle="contacts">
          {contactContent.map((contact, index) => (
            <Card
              key={index}
              image={contact.image}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
        <div className="contact-map">
          
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.9374752593967!2d87.27986560000001!3d26.457744300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75002f2f5de7%3A0xa29fb5b2dfa7c67e!2sVelocis%20Core!5e0!3m2!1sen!2snp!4v1745732810826!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          
        </div>
      </div>
    </>
  );
}

export default Contact
