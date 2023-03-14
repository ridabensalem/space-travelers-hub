import React from 'react';
import { useSelector } from 'react-redux';
import { getRocketsDataFromAPI } from '../features/rockets/rocketSlice';

const Rocket = () => {
  const rockets = useSelector((store) => store.rockets);

  return (
    <div>
      <div>
        <img src='' alt='' />
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
