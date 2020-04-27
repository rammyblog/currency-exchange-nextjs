import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"
import Loading from "./Loading"
import ErrorPage from "../pages/_error"

function MainApp() {
  const [countries, setCountries] = useState(null)
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const errorText = "Please check your internet connection and reload this page"

  useEffect(() => {
    const gettingCountries = async () => {
      const endpoint = "latest"
      const api_key = process.env.API_KEY
      const base_url = "https://api.currencyscoop.com/v1/"

      try {
        setLoading(true)
        const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
        const countryRes = await axios.get(
          base_url + "currencies" + "?api_key=" + api_key
        )
        setCountries(Object.values(countryRes.data.response.fiats))
        setRates(res.data.response.rates)
        setLoading(false)
      } catch (error) {
        console.log(error)

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
      {error ? <ErrorPage text={errorText} /> : null}
    </>
  )
}

export default MainApp
