import { useState } from "react"

export default function InputLayout({
  inputType,
  countries,
  handleDataChange,
  handleCurrencyAmountChange,
  data,
}) {
  const box1Id = `currencyType${inputType}`
  const box2Id = `amount${inputType}`

  const handleCurrencyChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    handleDataChange(name, value, inputType)
  }

  const handleChangeConversion = (event) => {
    // console.log(event.target.value)
    handleCurrencyAmountChange(event.target.value)
  }

  return (
    <>
      {!countries ? null : (
        <div className="w-full max-w-lg">
          <form className="flex flex-row w-full max-w-lg justify-between -mx-2">
            <div className=" w-1/2 px-3 mb-6 md:mb-0 mr-10">
              <label
                className="block uppercase tracking-wide text-gray-700 text-left text-xs font-bold mb-2"
                htmlFor={box1Id}
              >
                Currency
              </label>
              <div className="relative">
                <select
                  name={box1Id}
                  className="block appearance-none  
                  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 
                  pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                  id={box1Id}
                  onChange={(event) => handleCurrencyChange(event)}
                >
                  {countries
                    ? countries.map((country, id) => (
                        <option value={country.currency_code} key={id}>
                          {country.currency_name}
                        </option>
                      ))
                    : null}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor={box2Id}
              >
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={box2Id}
                name={box2Id}
                type="text"
                placeholder="90210"
                value={data}
                onChange={handleChangeConversion}
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}
