import React from 'react'

const Teamcard = ({image , name , position}) => {
  return (
    <div className="teamCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}

export default Teamcard
