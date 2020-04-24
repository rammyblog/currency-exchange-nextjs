import InputLayout from "./InputLayout"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Calculator() {
  const inputType = ["InputBox", "OutputBox"]

  const [countries, setCountries] = useState(null)
  const [rates, setRates] = useState(null)

  const [data, setData] = useState({
    currencyTypeInputBox: "AED",
    currencyTypeOutputBox: "AED",
  })
  useEffect(() => {
    const gettingCountries = async () => {
      const endpoint = "latest"
      const api_key = "2a7a202c431ecf4169c017ee138d8577"
      const base_url = "https://api.currencyscoop.com/v1/"

      try {
        const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
        setCountries(Object.keys(res.data.response.rates))
        setRates(res.data.response.rates)
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
    rateConversion(data)
  }

  const rateConversion = ({ amountInputBox, amountOutputBox, input }) => {
    const InputAmount = parseFloat(amountInputBox)
    const OnputAmount = parseFloat(amountOutputBox)

    if (Number.isNaN(InputAmount) || Number.isNaN(OnputAmount)) {
      return ""
    }

    const output = InputAmount * OnputAmount
    const rounded = Math.round(output * 1000) / 1000
    if (input == "InputBox") {
      setData({
        ...data,
        OutputBox: 2999,
      })
    }
    return rounded.toString()
  }

  return (
    <div>
      {countries ? (
        <>
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[0]}
            data={data}
          />
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[1]}
            data={data}
          />
        </>
      ) : null}
    </div>
  )
}

// ndpoint = 'convert';
// api_key = 'API_KEY';

// // define from currency, to currency, and amount
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
