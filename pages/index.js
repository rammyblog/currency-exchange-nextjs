import Head from "next/head"
import Layout from "../components/Layout"
import axios from "axios"
import ErrorPage from "./_error"
import { useEffect } from "react"
export default function Home({ countries, errorCode, rates, loading }) {
  return (
    <>
      {errorCode ? (
        <ErrorPage statusCode={errorCode} />
      ) : (
        <div className="container mx-auto">
          <Layout countries={countries} rates={rates}>
            <Head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <meta name="description" content="Description" />
              <meta name="keywords" content="Keywords" />
              <title>Exchanger (Rate Calculator)</title>

              <link rel="manifest" href="/manifest.json" />
              <link
                href="/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
              />
              <link
                href="/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
              />
              <link rel="apple-touch-icon" href="/apple-icon.png"></link>
              <meta name="theme-color" content="#38b2ac" />
            </Head>
          </Layout>
        </div>
      )}
    </>
  )
}

export async function getServerSideProps() {
  let loading = false
  const endpoint = "latest"
  const api_key = "2a7a202c431ecf4169c017ee138d8577"
  const base_url = "https://api.currencyscoop.com/v1/"
  const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
  const countryRes = await axios.get(
    base_url + "currencies" + "?api_key=" + api_key
  )
  const countries = Object.values(countryRes.data.response.fiats)
  const rates = res.data.response.rates
  const errorCode = res.statusText === "OK" ? false : res.status

  loading = true

  return {
    props: { countries, rates, errorCode, loading },
  }
}
