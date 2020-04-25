import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"
import Loading from "./Loading"
import Footer from "./Footer"
import ErrorPage from "../pages/_error"

function MainApp() {
  const [countries, setCountries] = useState(null)
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const gettingCountries = async () => {
      const endpoint = "latest"
      const api_key = "2a7a202c431ecf4169c017ee138d8577"
      const base_url = "https://api.currencyscoop.com/v1/"

      try {
        setLoading(true)
        const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
        setCountries(Object.keys(res.data.response.rates))
        setRates(res.data.response.rates)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    gettingCountries()
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <Header countries={countries} rates={rates} loading={loading} />
        </>
      ) : (
        <Loading />
      )}

      {error ? <ErrorPage /> : null}
    </>
  )
}

export default MainApp