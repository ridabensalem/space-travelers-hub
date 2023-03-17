import React from 'react';
import { useSelector } from 'react-redux';
import { JoinedMissions } from './missions';
import '../styles/rocket.css';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved && rocket);

  return (
    <div className="profileContainer">
      <div className="my_missions">
        <h2>My Mission</h2>
        <JoinedMissions />
      </div>
      <div className="my_missions">
        <h2>My Rocktes</h2>
        <div>
          {reservedRockets.map((rocket) => (
            <p key={rocket.id} className="rocketReserved">{rocket.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
