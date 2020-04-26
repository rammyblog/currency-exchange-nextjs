import "../styles.css"
import "../nprogress.css"
import Router from "next/router"
import Link from "next/link"
import Head from "next/head"

import Loading from "../components/Loading"
import { useEffect } from "react"
import NProgress from "nprogress"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false)

  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>
}
