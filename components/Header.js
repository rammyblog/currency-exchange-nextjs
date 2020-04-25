import Calculator from "./Calculator"

export default function Header({ countries, rates }) {
  return (
    <>
      (
      <div className="flex flex-col justify-center items-center">
        <img src="/images/money.png" className="w-48" />
        <p className="text-teal-500 font-bold text-center text-xl">
          Exchange Rate Calculator
        </p>
        <p className="text-center mb-4">
          Choose the currency and the amounts to get the exchange rate
        </p>
        <Calculator countries={countries} rates={rates} />
      </div>
      )
    </>
  )
}
