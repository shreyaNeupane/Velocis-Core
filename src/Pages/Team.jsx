import React from 'react'
import Teamcard from '../component/Teamcard';
import image1 from "../assets/images/team-images/nirajan.jpg";
import image2 from "../assets/images/team-images/pujan.jpg";
import image3 from "../assets/images/team-images/crpoudyal.png";
import image4 from "../assets/images/team-images/rahul.png";
import image5 from "../assets/images/team-images/sanjit-pudasain.png";
import image6 from "../assets/images/team-images/pramod.png";


  const teamMembers = [
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image1,
    },
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image2,
    },
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image3,
    },
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image4,
    },
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image5,
    },
    {
      name: "rahul Singh",
      position: "legal Head",
      image: image6,
    },
  ];
  const Team = () => {
    return (
      <>
        <div className="team-main-container">
          <div className="team-container">
            <div className="intro">
              <p>Meet Our Advisors</p>
              <h2>Our professional Consulting Team</h2>
            </div>
          </div>

          <div className="team-members" id="team-members">
            {teamMembers.map((member, index) => (
              <Teamcard
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

export default Team
