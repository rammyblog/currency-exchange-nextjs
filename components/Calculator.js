import InputLayout from "./InputLayout"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Calculator() {
  const inputType = ["InputBox", "OutputBox"]

  const [countries, setCountries] = useState(null)
  const [rates, setRates] = useState(null)

  const [data, setData] = useState({
    currencyTypeInputBox: "USD",
    currencyTypeOutputBox: "USD",
    // amountInputBox: "0",
    // amountOutputBox: "0",
    // converted: 0,
  })
  const [currency, setCurrency] = useState({
    exchanged_amount: "",
    inputType: "one",
  })
  // const [currency2, setCurrency2] = useState(null)

  useEffect(() => {
    const gettingCountries = async () => {
      const endpoint = "latest"
      const api_key = "2a7a202c431ecf4169c017ee138d8577"
      const base_url = "https://api.currencyscoop.com/v1/"

      try {
        const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
        setCountries(Object.keys(res.data.response.rates))
        setRates(res.data.response.rates)
        // console.log(rates])
      } catch (error) {
        console.log(error)
      }
    }
    gettingCountries()
  }, [])

  const handleDataChange = (name, value, inputType) => {
    setData({
      ...data,
      [name]: value,
      input: inputType,
    })
    console.log(data)

    // rateConversion(data)
  }

  // const handleCurrencyAmountChange = (amount, inputType) => {
  //   inputType === "amountInputBox"
  //     ? rateConversion1(amount, "amountOutputBox")
  //     : data.amountInputBox
  //   inputType === "amountOutputBox"
  //     ? rateConversion2(amount, "amountInputBox")
  //     : data.amountOutputBox
  // }

  const rateConversion1 = (amount, input) => {
    const output = parseFloat(amount)
    const rounded = Math.round(output * 1000) / 1000
    setCurrency(rounded)
    setData({
      ...data,
      amountOutputBox: currency,
    })
    // return rounded.toString()
  }
  function rateConversion(amount, type) {
    const input = parseFloat(amount)
    if (Number.isNaN(input)) {
      return ""
    }
    const output = convert(input, type)
    const rounded = Math.round(output * 1000) / 1000

    console.log(rounded)

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
    console.log(to, from)

    return input * (to / from)
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
            // handleCurrencyTypeChange={handleCurrencyTypeOneChange}
          />
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[1]}
            data={inputOne}
            // handleCurrencyTypeChange={handleCurrencyTypeTwoChange}
            handleCurrencyAmountChange={handleInputTwoAmountChange}
          />
        </>
      ) : null}
    </div>
  )
}

// ndpoint = 'convert';
// api_key = 'API_KEY';

// // define from currency, to currency, and amount123456632
// from = 'EUR';
// to = 'GBP';
// amount = '10';

// // execute the conversion using the "convert" endpoint:
// $.ajax({
// url: 'https://api.currencyscoop.com/' + endpoint + '?api_key=' + api_key +'&from=' + from + '&to=' + to +
// '&amount=' + amount,
// dataType: 'jsonp',
// success: function(json) {

// // access the conversion result in json.result
// alert(json);

// }
// });
