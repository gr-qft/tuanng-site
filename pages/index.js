import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          textAlign: "right",
        }}
      >
        <IconContext.Provider
          value={{
            color: "#6495ED",
            style: { verticalAlign: "middle" },
            size: "2.5em",
          }}
        >
          <div>
            <BiMenu />
          </div>
        </IconContext.Provider>
      </nav>
      <div className={styles.main}>
        <div>
          <Image
            className={styles.image}
            src="/img/me.png"
            alt="Tuan Ng"
            width={80}
            height={80}
          />
        </div>
        <div>
          <h1> Tuan Nguyen </h1>
          <p>
            Hello, thank you for visiting my site. I'm a software developer
            living Montréal, Québec, Canada. I love programming and in fact all
            things related to computing (programming languages, databases,
            operating systems etc.).
          </p>
          <p>
            I am proficient with frontend and backend technologies: Javascript,
            TypeScript, React, HTML, CSS, Yarn, Webpack, Storybook, GraphQL,
            REST APIs, databases (SQL and NoSQL), Node.js, Next.js. I am also
            experienced with mainstream programming languages: C, Python,
            Scheme, Java etc.
          </p>
        </div>
      </div>
      <Interests />
    </div>
  );
}
