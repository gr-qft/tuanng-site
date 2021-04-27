import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/Nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prevState) => !prevState);
  const dropdown = useRef(null);
  const [scrollHeight, setScrollHeight] = useState("0");
  const router = useRouter();

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
      <div
        className={`${router.asPath === "/blog" ? styles.wide : styles.narrow}`}
      >
        <IconContext.Provider
          value={{
            color: "#FFBF00",
            style: { verticalAlign: "middle", cursor: "pointer" },
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
          <ul onClick={toggleVisible}>
            <li>
              <Link href="/">
                <a> Home </a>
              </Link>
            </li>
            <li>
              <Link href="/cv">
                <a> CV </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a> Blog </a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/gr-qft" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tuan_m_ng" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
