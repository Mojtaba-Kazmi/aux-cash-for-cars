import styles from "@/styles/Number.module.css";
import { BsTelephoneForwardFill } from "react-icons/bs";

function Number() {
  return (
    <div className={styles.contact_num}>
      <a href="tel:0469798540" title="Aux cash for car number">
        <p>0469798540</p>
        <div className={styles.freeCall}>
          <p>Free Call</p>
        </div>
      </a>
    </div>
  );
}

export default Number;
