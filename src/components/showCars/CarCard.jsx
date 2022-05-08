import PropTypes from 'prop-types';
import styles from './ShowCars.module.scss';

const CarCard = (props) => {
  const {name, email, carNo, time, carImg} = props;

  return (
    <div className={styles.car_card}>
      <img src={carImg} alt="parkocator"></img>

      <div className={styles.car_card_info}>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <h5>{carNo}</h5>
        <h5>{time}</h5>
      </div>
    </div>
  )
}

CarCard.propTypes = {
  carImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  carNo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default CarCard;
