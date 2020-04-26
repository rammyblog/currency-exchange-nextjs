import InputLayout from "./InputLayout"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Calculator({ countries, rates }) {
  const inputType = ["InputBox", "OutputBox"]
  // const [countries, setCountries] = useState(null)
  // const [rates, setRates] = useState(null)

  const [data, setData] = useState({
    currencyTypeInputBox: "USD",
    currencyTypeOutputBox: "USD",
  })
  const [currency, setCurrency] = useState({
    exchanged_amount: "",
    inputType: "one",
  })

  // useEffect(() => {
  //   const gettingCountries = async () => {
  //     const endpoint = "latest"
  //     const api_key = "2a7a202c431ecf4169c017ee138d8577"
  //     const base_url = "https://api.currencyscoop.com/v1/"

  //     try {
  //       const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
  //       setCountries(Object.keys(res.data.response.rates))
  //       setRates(res.data.response.rates)
  //       handleSetLoading(false)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   gettingCountries()
  // }, [])

  const handleDataChange = (name, value, inputType) => {
    setData({
      ...data,
      [name]: value,
      input: inputType,
    })
  }

  function rateConversion(amount, type) {
    const input = parseFloat(amount)
    if (Number.isNaN(input)) {
      return ""
    }
    const output = convert(input, type)
    const rounded = Math.round(output * 1000) / 1000

    return rounded.toString()
  }

  const convert = (input, type) => {
    let from = ""
    let to = ""

    if (type === "one") {
      for (let [key, value] of Object.entries(rates)) {
        if (key === data.currencyTypeInputBox) {
          from = value
        } else if (key === data.currencyTypeOutputBox) {
        
          to = value
        }
      }
    }

    if (type === "two") {
      for (let [key, value] of Object.entries(rates)) {
        if (key === data.currencyTypeInputBox) {
          to = value
        } else if (key === data.currencyTypeOutputBox) {
          from = value
        }
      }
    }

    const value =
      data.currencyTypeOutputBox === data.currencyTypeInputBox
        ? input
        : input * (from / to)

    return value
  }

  const handleInputOneAmountChange = (amount) => {
    setCurrency({ inputType: "one", exchanged_amount: amount })
  }
  const handleInputTwoAmountChange = (amount) => {
    setCurrency({ inputType: "two", exchanged_amount: amount })
  }

  const inputOne =
    currency.inputType === "one"
      ? rateConversion(currency.exchanged_amount, "two")
      : currency.exchanged_amount

  const inputTwo =
    currency.inputType === "two"
      ? rateConversion(currency.exchanged_amount, "one")
      : currency.exchanged_amount

  return (
    <div>
      {countries ? (
        <>
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[0]}
            data={inputTwo}
            handleCurrencyAmountChange={handleInputOneAmountChange}
          />
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[1]}
            data={inputOne}
            handleCurrencyAmountChange={handleInputTwoAmountChange}
          />
        </>
      ) : null}
    </div>
  )
}
