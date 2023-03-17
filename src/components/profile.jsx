import React from 'react';
import { useSelector } from 'react-redux';
import { JoinedMissions } from './missions';

function Profile() {
  const reservedDragon = useSelector(
    (state) => state.dragonReducer.reservedDragon,
  );

  return (
    <div>
      <div className="my_dragons">
        <h2>My Dragons</h2>
        <ul>
          {reservedDragon.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>
      <div className="my_missions">
        <h2>My Missions</h2>
        <JoinedMissions />
      </div>
    </div>
  );
}

export default Profile;
