import React from 'react';
import { useSelector } from 'react-redux';
import { JoinedMissions } from './missions';
import { ReserveDragons } from './dragons';

function Profile() {
  const { rockets } = useSelector((store) => store.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved && rocket);

  return (
    <div>
      <div className="profileContainer">
        <div className="my_dragons">
          <h2>My Dragons</h2>
          <ul className="dragons_list">
            <ReserveDragons />
          </ul>
        </div>
        <div className="my_missions">
          <h2>My Missions</h2>
          <JoinedMissions />
        </div>
        <div className="my_missions ">
          <h2>My Rockets</h2>
          <div className="rocket">
            {reservedRockets.map((rocket) => (
              <p key={rocket.id} className="rocketReserved">{rocket.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
