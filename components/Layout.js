import App from "./MainApp"
import MainApp from "./MainApp"

export default function Layout({ children, countries, rates }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen p-4">
        {countries && rates ? (
          <MainApp countries={countries} rates={rates} />
        ) : (
          <Loading />
        )}
        {children}
      </div>
    </>
  )
}
