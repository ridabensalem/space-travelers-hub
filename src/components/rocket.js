import React from 'react';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';
const response = fetch(ROCKET_URL);

const Rocket = () => {
  const rockets = {};

  return (
    <div>
      <div>
        <img src=''></img>
      </div>
      <div>
        <h3>sdjkvn</h3>
        <p>dsjvkn</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
