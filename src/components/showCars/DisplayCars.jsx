import styles from './ShowCars.module.scss';
import CarCard from './CarCard';

import { useState } from 'react'; 

const DisplayCars = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Farouqe Mia",
      email: "far@el.com",
      carNo: "KA-01-1234",
      time: "10 May,22 | 13:20",
      carImg: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid:MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 2,
      name: "Junayed Ullah", 
      email: "zn@el.com",
      carNo: "Ghar-01-1234",
      time: "10 May,22 | 15:10",
      carImg: "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
    }
  ]);

  return (
    <div className={styles.car_display}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />          
      ))}  
    </div>
  )
}

export default DisplayCars;
