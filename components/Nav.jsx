import styles from "@/components/Nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Nav() {
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
          <div>
            <BiMenu />
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  );
}
