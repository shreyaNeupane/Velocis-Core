import React from 'react'

const Teamcard = ({image , title , description}) => {
  return (
    <div className="teamCard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Teamcard
