import Navbar from "./navbar";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </>
  );
}
