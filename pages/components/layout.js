import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layut({children}) {
  return (
    <>
    <head>
      <link rel="short icon" href="/imgens/favicon.ico"/>
      <title>PokeNext</title>
    </head>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}
