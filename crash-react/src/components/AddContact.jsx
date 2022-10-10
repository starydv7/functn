import React from 'react'
import styles from "./addcontact.module.css";
const AddContact = () => {

  
  return (
    <div className={styles.form - 1}>
      <div className="form-layout">
        <h3> Add Details Here</h3>
        <form className="form">
          <div className="form-div">
            <label>Name</label>
            <br></br>
            <input type="text" placeholder="Name" className={styles.name} />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Contact Number</label>
            <br></br>
            <input
              type="text"
              placeholder="Contact Number"
              className={styles.contact}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Email</label>
            <br></br>
            <input type="text" placeholder="Email" className={styles.email} />
          </div>
          <div className="form-div2">
            <label>Linkedin id</label>
            <br></br>
            <input
              type="url"
              placeholder="Linkdin Url"
              className={styles.url}
            />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Github Account</label>
            <br></br>
            <input type="url" placeholder="Github Url" className={styles.url} />
          </div>
          <br></br>
          <div className="form-div2">
            <label>Role</label>
            <br></br>
            <input type="text" placeholder="Frontend/Backend-Dev" className={styles.url} />
          </div>
          <div>
            <br></br>
            <input type="submit" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact