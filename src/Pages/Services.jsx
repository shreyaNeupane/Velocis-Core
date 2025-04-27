import React from 'react'
import '../assets/css/Services.css'
import Card from "../component/Card";

import {
  FaMobileAlt,
  FaGlobe,
  FaChartLine,
  FaLightbulb,
  FaPaintBrush,
  FaPencilRuler,
  FaPenNib,
  FaBullhorn,
} from "react-icons/fa";


const Services = () => {
  const serviceContent = [
    {
      header: "App Development",
      description:
        "Custom mobile and web applications tailored to meet your business needs and enhance user engagement.",
      image: <FaMobileAlt />,
    },
    {
      header: "Web Development",
      description:
        "Comprehensive web development solutions, ensuring your online presence is impactful and user-friendly.",
      image: <FaGlobe />,
    },
    {
      header: "Social Media Management",
      description:
        "Strategic social media management that enhances brand visibility and engages your audience effectively.",
      image: <FaChartLine />,
    },
    {
      header: "IT Consulting",
      description:
        "Expert IT consulting services to streamline your technology strategy and improve operational efficiency.",
      image: <FaLightbulb />,
    },
    {
      header: "UI/UX Design",
      description:
        "User-centric design solutions that enhance user experience and interface, making your applications intuitive.",
      image: <FaPaintBrush />,
    },
    {
      header: "Graphic Design",
      description:
        " Creative graphic design services to build your brand identity and make a lasting impression.",
      image: <FaPencilRuler />,
    },
    {
      header: "Content Creation",
      description:
        " Engaging content creation that captivates your audience and enhances your online presence.",
      image: <FaPenNib />,
    },

    {
      header: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies that boost your brand’s visibility and drive traffic.",
      image: <FaBullhorn />,
    },
  ];


  return (
    <>
      <div className="service-main-container">
        <div className="service-container">
          <div className="intro">
            <p>Consulting Services</p>
            <h2>Our Best Consulting Services</h2>
          </div>

          <div className="services">
            {serviceContent.map((service, index) => (
              <Card
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services
