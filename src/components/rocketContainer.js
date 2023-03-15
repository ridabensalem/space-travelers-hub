import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocket';

const RocketContainer = () => {
  const { rocketList } = useSelector((store) => store.rocket);
  return (
    <div>
      {rocketList.map((obj) => (
        <Rocket rocket={obj} key={obj.id} />
      ))}
      <div>Hello</div>
    </div>
  );
};

export default RocketContainer;
