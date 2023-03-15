import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocket';
import '../styles/rocket.css';

const RocketContainer = () => {
  const rocketList = useSelector((store) => store.rocket);

  return (
    <div>
      <div>Hi</div>
      {rocketList.map((obj) => (
        <Rocket rocket={obj} key={obj.id} />
      ))}
      <div>Hello</div>
    </div>
  );
};

export default RocketContainer;
