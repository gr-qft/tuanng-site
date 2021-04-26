import styles from "@/styles/CV.module.css";

export default function CV() {
  return (
    <div className={styles.wrapper}>
      <h1> Tuan Nguyen </h1>
      <p>
        Technical skills: Javascript, TypeScript, React, Svelte, HTML, CSS,
        Yarn, Webpack, GraphQL, REST APIs, Node.js, databases (SQL and NoSQL),
        Next.js.
      </p>

      <p> Mainstream programming languages: C, Python, Scheme, SML, Java. </p>
      <p> Other skills: Mathematics and Statistics.</p>
      <p>
        Education: Experimental Physics (Université de Montréal), Mathematics
        (Concordia University, University of Regina).
      </p>

      <p> Interests: Programming, Reading, Writing. </p>
    </div>
  );
}
