import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchDragon from './API/apiDragons';

function Dragon({ name, type, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <img src={image} alt={name} />
    </div>
  );
}

Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Dragons() {
  const { dragons, status, error } = useSelector(
    (state) => state.dragonReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {dragons.map((dragon) => (
        <Dragon
          key={dragon.id}
          name={dragon.name}
          type={dragon.type}
          image={dragon.flickr_images[0]}
        />
      ))}
    </div>
  );
}

export default Dragons;
