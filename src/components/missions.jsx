import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchMission from './API/apiMissions';
import { reserveMission } from '../features/missionSclice';
// header of the table
function HeaderTable() {
  return (
    <table border={1} className="header_table">
      <tr>
        <th className="header_mission">Mission</th>
        <th className="header_description">Description</th>
        <th className="header_status">status</th>
        <th className="header_action" aria-label="empty" />
      </tr>
    </table>

  );
}
function Mission({
  id,
  name,
  description,
  reserved,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <table className="missions_table" border={1}>
        <tr>
          <td className="mission_name">{name}</td>
          <td className="mission_description">{description}</td>
          <td className="mission_status">
            {reserved ? 'Member' : 'Not a Member'}
          </td>
          <td className="mission_action">
            <button type="submit" onClick={() => dispatch(reserveMission(id))}>
              {reserved ? 'Leave Meeting' : 'Join Meeting'}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
Mission.propTypes = { // Add
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};
function Missions() {
  const missionsArr = useSelector((state) => state.missionReducer.missionStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div>
      <HeaderTable />
      {missionsArr.map((mission) => (
        <Mission
          key={mission.mission_id}
          id={mission.mission_id}
          description={mission.description}
          name={mission.mission_name}
          reserved={mission.reserved}
          action={mission.action}

        />

      ))}
    </div>
  );
}

export default Missions;
