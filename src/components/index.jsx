import styles from "./index.module.scss";
import DisplayCars from "./showCars/DisplayCars";
import AddCar from "./addCar/AddCar";

const addCarFunc = (carInfo) => {
  console.log(carInfo);
};

const Parkocator = () => {
  return(
    <div className={styles.container}>
      <AddCar onAdd={addCarFunc}/>
      <DisplayCars/>
    </div>
  );  
};

export default Parkocator;
