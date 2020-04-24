import React from "react"
import Header from "./Header"

export default function Layout({ children, home, countries }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header home countries={countries} />
      {children}
    </div>
  )
}
