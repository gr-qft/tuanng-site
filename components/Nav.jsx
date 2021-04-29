import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/Nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prevState) => !prevState);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState("0");
  const router = useRouter();

  useEffect(() => {
    setScrollHeight(`${dropdownRef.current.scrollHeight}px`);
    if (visible) {
      dropdownRef.current.style.setProperty("height", scrollHeight);
    } else {
      dropdownRef.current.style.setProperty("height", "0");
    }
  }, [visible]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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
          <div ref={menuRef} onClick={toggleVisible}>
            <BiMenu />
          </div>
        </IconContext.Provider>
        <div
          ref={dropdownRef}
          className={
            visible ? `${styles.dropdown} ${styles.open}` : styles.dropdown
          }
        >
          <ul>
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
