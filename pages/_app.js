import { useRouter } from "next/router";
import "@/styles/globals.css";
import Nav from "@/components/Nav";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={"container"}>
      <Nav />
      <div className={`page ${router.asPath === "/blog" ? "wide" : "narrow"}`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
