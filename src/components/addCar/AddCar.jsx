import styles from "./AddCar.module.scss";
import { useState } from "react";

const AddCar = (props) => {
  const { onAdd } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [carNo, setCarNo] = useState("");
  const [carImg, setCarImg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({ name, email, carNo, carImg, date, time, agreement });
    
    setName("");
    setEmail("");
    setCarNo("");
    setCarImg("");
    setDate("");
    setTime("");
    setAgreement(false);
  }

  return (
    <div className={styles.car_form}>
      <h2>Add Car</h2>
      <form className={styles.add_form} onSubmit={handleSubmit}>

        <div className={styles.form_control}>
          <label>Owner Name</label>
          <input type="text" name="name" placeholder="Enter Owner Name" value={name} onChange={(e)=>setName(e.target.value)}/>          
        </div>

        <div className={styles.form_control}>
          <label>Email (If any)</label>
          <input type="email" name="email" placeholder="Enter Owner Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>          
        </div>

        <div className={styles.form_control}>
          <label>Car No.</label>
          <input type="text" name="carNo" placeholder="Enter Car Number" value={carNo} onChange={(e)=>setCarNo(e.target.value)}/>          
        </div>

        <div className={styles.form_control}>
          <label>Add Picture Link(If any)</label>
          <input type="text" name="carImg" placeholder="Enter Car picture" value={carImg} onChange={(e)=>setCarImg(e.target.value)}/>          
        </div>

        <div className={styles.form_control}>
          <label>Date</label>
          <input type="date" name="date" placeholder="Enter Parking Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>

        <div className={styles.form_control}>
          <label>Time</label>
          <input type="time" placeholder="Enter Parking Time" value={time} onChange={(e)=>setTime(e.target.value)}/>
        </div>

        <div className={`${styles.form_control} ${styles.form_control_check}`}>
          <input type="checkbox" checked={agreement} onChange={()=> setAgreement(!agreement)}/>
          <p>I agree all policy of Parkocator.</p>          
        </div>
        <input type="submit" name="time" value="Submit Registration" className={`${styles.submit_btn} ${styles.btn_block}`}/>
      </form>
    </div>
  )
}

export default AddCar;
