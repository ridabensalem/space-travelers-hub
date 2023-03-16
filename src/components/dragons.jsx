import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchDragon from './API/apiDragons';
import { reserveDragon } from '../features/dragonSlice';

function Dragon({
  name, type, image, reserved, onReserve,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <img src={image} alt={name} width="300" height="300" />
      <button type="button" onClick={onReserve} disabled={reserved}>
        {reserved ? 'Reserved' : 'Reserve dragon'}
      </button>
    </div>
  );
}
Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  onReserve: PropTypes.func.isRequired,
};

function Dragons() {
  const dragonsArr = useSelector((state) => state.dragonReducer.dragonStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveDragon({ id }));
  };

  return (
    <div>
      {dragonsArr.map((dragon) => (
        <Dragon
          key={dragon.id}
          name={dragon.name}
          type={dragon.type}
          image={dragon.flickr_images[0]}
          reserved={dragon.reserved}
          onReserve={() => handleReserve(dragon.id)}
        />
      ))}
    </div>
  );
}

export default Dragons;
