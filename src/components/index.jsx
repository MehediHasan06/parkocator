import styles from "./index.module.scss";
import DisplayCars from "./showCars/DisplayCars";
import AddCar from "./addCar/AddCar";

const Parkocator = () => {
  return(
    <div className={styles.container}>
      <AddCar/>
      <DisplayCars/>
    </div>
  );  
};

export default Parkocator;
