import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchDragon from './API/apiDragons';
import { reserveDragon, cancelDragon } from '../features/dragonSlice';

function Dragon({
  id, name, type, image, reserved,
}) {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon({ id }));
  };

  const handleCancel = () => {
    dispatch(cancelDragon({ id }));
  };

  return (
    <div className="dragons_container">
      <h1>{name}</h1>
      <p>{type}</p>
      <img src={image} alt={name} width="300" height="300" />
      {reserved ? (
        <button onClick={handleCancel} type="button">
          Cancel booking
        </button>
      ) : (
        <button onClick={handleReserve} type="button">
          Reserve dragon
        </button>
      )}
    </div>
  );
}
function ReserveDragons() {
  const dragons = useSelector((state) => state.dragonReducer.dragonStore);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div>

      {filteredDragons.map((dragon) => (
        <div key={dragon.id}>{dragon.name}</div>
      ))}
    </div>
  );
}

Dragon.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

function Dragons() {
  const dragonsArr = useSelector((state) => state.dragonReducer.dragonStore);
  const status = useSelector((state) => state.dragonReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') dispatch(fetchDragon());
  }, [dispatch, status]);

  return (
    <div>
      {dragonsArr.map((dragon) => (
        <Dragon
          key={dragon.id}
          id={dragon.id}
          name={dragon.name}
          type={dragon.type}
          image={dragon.flickr_images[0]}
          reserved={dragon.reserved}
        />
      ))}
    </div>
  );
}

export default Dragons;
export { ReserveDragons };
