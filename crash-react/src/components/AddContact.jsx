import React from 'react'
import styles from "./addcontact.module.css";
const AddContact = () => {
  return (
    <div className={styles.form-1}>
      <div className="form-layout">
        <form className="form">
          <div className='form-div'>
            <label>Name</label>
            <input type="text" placeholder="Name" />
                  </div>
                  <div className='form-div2'>
                      <label>Contact Number</label>
                      <input type="text"placeholder='Contact Number'/>
                  </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact