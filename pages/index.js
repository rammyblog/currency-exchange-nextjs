import Head from "next/head"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Exchanger</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  )
}
