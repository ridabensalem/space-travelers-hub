import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import fetchDragon from './API';

function Dragon({
  name, type,image
}) {
  return (

    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{image}</p>
    </div>
  );
}
Dragon.propTypes = { 
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
function Dragons() {
  const dragonsArr = useSelector((state) => state.dragonReducer.dragonStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragon());
  }, [dispatch]);

  return (
    <div>
      {dragonsArr.map((dragon) => (
        <Dragon
          key={dragon.id}
          id={dragon.id}
          name={dragon.name}
          type={dragon.type}
          image={dragon.flickr_images }
        />

      ))}
    </div>
  );
}

export default Dragons;