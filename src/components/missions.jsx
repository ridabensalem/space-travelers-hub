import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchMission from './API/apiMissions';

function HeaderTable() {
  return (
    <table border={1} width="100%">
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>action</th>
      </tr>
    </table>

  );
}
function Mission({
  name, description,
}) {
  return (

    <div>
      <table border={1}>
        <tr>
          <td>{name}</td>
          <td>{description}</td>
          <td><button type="submit">submit</button></td>
        </tr>

      </table>
    </div>
  );
}
Mission.propTypes = { // Add propTypes
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
        />

      ))}
    </div>
  );
}

export default Missions;
