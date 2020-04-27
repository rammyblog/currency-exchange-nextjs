export default function Rates({ inputType, currencyType, conversionRate }) {
  console.log(conversionRate)

  if (inputType === "one" || inputType === "two") {
    return (
      <>
        {inputType === "one" ? (
          <div className="flex justify-end p-4 text-sm text-teal-500 font-semibold">
            1 {currencyType.currencyTypeInputBox} = {conversionRate}{" "}
            {currencyType.currencyTypeOutputBox}{" "}
          </div>
        ) : (
          <div className="flex justify-end p-4 text-sm text-teal-500 font-semibold">
            1 {currencyType.currencyTypeInputBox} = {conversionRate}{" "}
            {currencyType.currencyTypeOutputBox}{" "}
          </div>
        )}
      </>
    )
  }
}
