import InputLayout from "./InputLayout"
import { useState, useEffect } from "react"
import { numberWithCommas } from "./utils/numberFormatting"
import Rates from "./Rates"

export default function Calculator({ countries, rates }) {
  const inputType = ["InputBox", "OutputBox"]
  // const [countries, setCountries] = useState(null)
  const [conversionRate, setConversionRate] = useState(1)

  const [data, setData] = useState({
    currencyTypeInputBox: "AED",
    currencyTypeOutputBox: "AED",
  })
  const [currency, setCurrency] = useState({
    exchanged_amount: "",
    inputType: "one",
  })

  useEffect(() => {
    toggleRates()
  }, [data.currencyTypeOutputBox, data.currencyTypeInputBox, inputType])

  const handleDataChange = (name, value, inputType) => {
    setData({
      ...data,
      [name]: value,
      input: inputType,
    })
  }

  function rateConversion(amount, type) {
    const input = parseFloat(amount.replace(/\,/g, ""))

    if (Number.isNaN(input)) {
      return ""
    }
    const { value: output } = convert(input, type)

    const rounded = numberWithCommas(
      Math.round(output * 1000) / 1000
    ).toString()

    return rounded
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
    const conversionRate =
      data.currencyTypeOutputBox === data.currencyTypeInputBox
        ? 1
        : Math.round((to / from) * 1000) / 1000
    return { value, conversionRate }
  }

  const handleInputOneAmountChange = (amount) => {
    setCurrency({
      inputType: "one",
      exchanged_amount: amount,
    })
  }
  const handleInputTwoAmountChange = (amount) => {
    setCurrency({
      inputType: "two",
      exchanged_amount: amount,
    })
  }

  const toggleRates = () => {
    const { conversionRate } = convert(
      currency.exchanged_amount,
      currency.inputType
    )
    setConversionRate(conversionRate)
  }

  const inputOne =
    currency.inputType === "one"
      ? rateConversion(currency.exchanged_amount, "two")
      : currency.exchanged_amount

  const inputTwo =
    currency.inputType === "two"
      ? rateConversion(currency.exchanged_amount, "one")
      : currency.exchanged_amount

  console.log(currency.exchanged_amount)

  return (
    <div className="w-full">
      {countries ? (
        <>
          <InputLayout
            handleDataChange={handleDataChange}
            countries={countries}
            inputType={inputType[0]}
            data={inputTwo}
            handleCurrencyAmountChange={handleInputOneAmountChange}
          />
          <Rates
            inputType={currency.inputType}
            currencyType={data}
            conversionRate={conversionRate}
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
