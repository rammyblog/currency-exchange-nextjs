import "../styles.css"
import "../nprogress.css"
import Router from "next/router"
import Link from "next/link"
import Head from "next/head"
import NProgress from "nprogress"

import Loading from "../components/Loading"
import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  return <>{pageProps ? <Component {...pageProps} /> : <Loading />}</>
}
