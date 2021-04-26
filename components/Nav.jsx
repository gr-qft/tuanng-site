import { useState, useRef, useEffect } from "react";
import styles from "@/components/Nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prevState) => !prevState);
  const dropdown = useRef(null);
  const [scrollHeight, setScrollHeight] = useState("0");

  useEffect(() => {
    setScrollHeight(`${dropdown.current.scrollHeight}px`);
    if (visible) {
      dropdown.current.style.setProperty("height", scrollHeight);
    } else {
      dropdown.current.style.setProperty("height", "0");
    }
  }, [visible]);

  return (
    <nav className={styles.container}>
      <div>
        <IconContext.Provider
          value={{
            color: "#FFBF00",
            style: { verticalAlign: "middle" },
            size: "3em",
          }}
        >
          <div onClick={toggleVisible}>
            <BiMenu />
          </div>
        </IconContext.Provider>
        <div
          ref={dropdown}
          className={
            visible ? `${styles.dropdown} ${styles.open}` : styles.dropdown
          }
        >
          <ul>
            <li> CV </li>
            <li>
              <a href="https://github.com/gr-qft"> Github</a>
            </li>
            <li>
              <a href="https://twitter.com/tuan_m_ng"> Twitter </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
