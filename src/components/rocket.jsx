import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    name,
    description,
    flickrImage,
  } = rocket;

  return (
    <div>
      <div>
        <img src={flickrImage} alt="hello" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    flickrImage: PropTypes.string,
  }).isRequired,
};

export default Rocket;
