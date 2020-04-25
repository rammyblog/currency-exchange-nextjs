import Head from "next/head"

import Data from "./Data"

export default function Layout({ children, home, countries }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen p-4">
        <Data />
        {children}
      </div>
    </>
  )
}
