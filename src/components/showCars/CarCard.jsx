import PropTypes from 'prop-types';
import styles from './ShowCars.module.scss';

const CarCard = (props) => {
  const { name, email, carImg, carNo, time } = props.car;

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
  carImg: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  carNo: PropTypes.string,
  time: PropTypes.string
};

export default CarCard;
