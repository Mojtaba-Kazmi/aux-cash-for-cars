import React from "react";
import styles from "@/styles/Massage.module.css";

function Message() {
  return (
    <div className={styles.massageContainer}>
      <h3>Send us a message</h3>
      <form
        action="https://formspree.io/f/meqwkezw"
        method="POST"
        className={styles.form}
      >
        <div className={styles.names}>
          <div>
            <label htmlFor="#companyName" name="Campany Name">
              Company Name
            </label>
            <br />
            <input type="text" id="companyName" name="Campany Name" />
          </div>
          <div>
            <label htmlFor="#contactName" name="Contact Name">
              Contact Name *
            </label>
            <br />
            <input type="text" id="contactName" required name="Contact Name" />
          </div>
        </div>

        <div className={styles.emailAndContect}>
          <div>
            <label htmlFor="#phoneNum" name="Phone">
              Phone Number
            </label>
            <br />
            <input type="tel" id="phoneNum" name="Phone" />
          </div>
          <div>
            <label htmlFor="#email" name="Email">
              Email *
            </label>
            <br />
            <input type="text" id="email" required name="Email" />
          </div>
        </div>

        <div className={styles.massage}>
          <label htmlFor="#massage" name="Massage">
            Massage *
          </label>
          <br />
          <input type="text" id="massage" required name="Massage" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Message;
