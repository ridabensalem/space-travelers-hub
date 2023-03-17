import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../features/rockets/rocketSlice';
import styles from '../styles/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const { status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === false) dispatch(fetchRockets());
  }, [dispatch, status]);

  return (
    <div className="container">
      {status && rockets.map((each) => (
        <div key={each.id} className="article">
          <img src={each.image} className="img" alt={each.name} />
          <div>
            <h2 className={styles.title}>{each.name}</h2>
            <p className="rocketDetails">
              {each.reserved ? <span className="span">Reserved</span> : ''}
              {each.description}
            </p>
            <button
              type="button"
              className={each.reserved ? 'unreserve' : 'reserve'}
              onClick={() => dispatch(reserveRocket(each.id))}
            >
              {each.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
