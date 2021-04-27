import styles from "@/styles/CV.module.css";

export default function CV() {
  return (
    <div className={styles.page}>
      <h1> Tuan Nguyen </h1>

      <h3> Software Engineer </h3>

      <p>
        Experiences: Frontend Developer (Vanilla Forums), Fullstack Developer
        (MaintainX).
      </p>
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
