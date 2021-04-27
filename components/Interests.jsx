import { useState, useEffect } from "react";
import shuffle from "lodash.shuffle";
import { Flipper, Flipped } from "react-flip-toolkit";
import styles from "./Interests.module.css";
import { IconContext } from "react-icons";
import { FaBookOpen } from "react-icons/fa";
import { RiMovie2Line, RiRunLine } from "react-icons/ri";
import {
  GiMusicalNotes,
  GiForestCamp,
  GiFruitBowl,
  GiCommercialAirplane,
} from "react-icons/gi";
import { BiSwim } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";

const data = {
  reading: <FaBookOpen />,
  writing: <HiOutlinePencil />,
  runnning: <RiRunLine />,
  travel: <GiCommercialAirplane />,
  eating: <GiFruitBowl />,
  movies: <RiMovie2Line />,
  music: <GiMusicalNotes />,
  outdoor: <GiForestCamp />,
  swimming: <BiSwim />,
};

export default function Interests() {
  const [items, setItems] = useState(Object.keys(data));
  useEffect(() => {
    const t = setInterval(() => setItems(shuffle), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <Flipper flipKey={items.join("")}>
      <div className={styles.container}>
        <IconContext.Provider
          value={{
            color: "#000",
            size: "2.5em",
            style: { verticalAlign: "middle" },
          }}
        >
          {items.map((item) => {
            return (
              <Flipped key={item} flipId={item}>
                <div> {data[item]}</div>
              </Flipped>
            );
          })}
        </IconContext.Provider>
      </div>
    </Flipper>
  );
}
