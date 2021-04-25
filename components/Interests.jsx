import styles from "./Interests.module.css";
import { IconContext } from "react-icons";
import { RiRunLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";
import { GiMusicalNotes } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { BiSwim } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";

export default function Interests() {
  return (
    <div className={styles.container}>
      <IconContext.Provider
        value={{ size: "2.5em", style: { verticalAlign: "middle" } }}
      >
        <div>
          {" "}
          <FaBookOpen />{" "}
        </div>
        <div>
          <HiOutlinePencil />
        </div>
        <div>
          {" "}
          <RiRunLine />{" "}
        </div>

        <div>
          {" "}
          <GiCommercialAirplane />{" "}
        </div>
        <div>
          {" "}
          <GiFruitBowl />{" "}
        </div>
        <div>
          {" "}
          <RiMovie2Line />{" "}
        </div>
        <div>
          {" "}
          <GiMusicalNotes />{" "}
        </div>
        <div>
          {" "}
          <GiForestCamp />{" "}
        </div>
        <div>
          {" "}
          <BiSwim />{" "}
        </div>
      </IconContext.Provider>
    </div>
  );
}
