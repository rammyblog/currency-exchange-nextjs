import App from "./MainApp"
import MainApp from "./MainApp"

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen p-4">
        <MainApp />
        {children}
      </div>
    </>
  )
}
