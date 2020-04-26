import Calculator from "./Calculator"
import Footer from "./Footer"

export default function Header({ countries, rates }) {
  return (
    <>
      {!countries ? null : (
        <>
          <div className="flex flex-col justify-center items-center w-gull">
            <img src="/images/money.png" className="w-48" alt="logo" />
            <p className="text-teal-500 font-bold text-center text-xl">
              Exchange Rate Calculator
            </p>
            <p className="text-center mb-4">
              Choose the currency and the amounts to get the exchange rate
            </p>
            <Calculator countries={countries} rates={rates} />
          </div>
          <Footer />
        </>
      )}
    </>
  )
}
