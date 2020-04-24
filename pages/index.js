import Head from "next/head"
import Layout from "../components/Layout"
import axios from "axios"
import fetch from "node-fetch"
export default function Home(props) {
  const { countries } = props
  return (
    <Layout home countries={countries}>
      <div className="container">
        <Head>
          <title>Exchanger</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  )
}

// This gets called on every request
// export async function getServerSideProps() {
//   const countries = []

//   return { props: { countries } }
// }

// // set endpoint and your access key
// endpoint = "convert"
// api_key = "API_KEY"

// // define from currency, to currency, and amount
// from = "EUR"
// to = "GBP"
// amount = "10"

// // execute the conversion using the "convert" endpoint:
// $.ajax({
//   url:
//     "https://api.currencyscoop.com/" +
//     endpoint +
//     "?api_key=" +
//     api_key +
//     "&from=" +
//     from +
//     "&to=" +
//     to +
//     "&amount=" +
//     amount,
//   dataType: "jsonp",
//   success: function (json) {
//     // access the conversion result in json.result
//     alert(json)
//   },
// })
