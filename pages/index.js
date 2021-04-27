import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
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
            living in Montréal, Québec, Canada. I love programming and in fact
            all things related to computing (programming languages, databases,
            operating systems etc.).
          </p>
          <p>
            I am proficient with frontend and backend technologies: Javascript,
            TypeScript, React, HTML, CSS, Yarn, Webpack, Storybook, GraphQL,
            REST APIs, databases (SQL and NoSQL), Node.js, Next.js. I am also
            experienced with mainstream programming languages: C, Python,
            Scheme, Java etc.
          </p>
          <div style={{ marginTop: "1em" }}>
            <Interests />
          </div>
        </div>
      </div>
    </div>
  );
}
