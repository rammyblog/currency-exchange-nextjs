import Calculator from "./Calculator"

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/images/money.png" className="w-48" />
      <p className="text-teal-500 font-bold text-center text-xl">
        Exchange Rate Calculator
      </p>
      <p>Choose the currency and the amounts to get the exchange rate</p>
      <Calculator />
    </div>
  )
}
