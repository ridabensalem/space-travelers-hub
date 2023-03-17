import React from 'react';
import { JoinedMissions } from './missions';
import { ReserveDragons } from './dragons';

function Profile() {
  return (
    <div>
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
    </div>
  );
}

export default Profile;
