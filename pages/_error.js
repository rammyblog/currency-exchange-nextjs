import Typed from "react-typed"

export default function ErrorPage(props) {
  return (
    <div className="container text-center h-screen flex justify-center items-center flex-col">
      <img
        className="img"
        src="https://img.icons8.com/dusk/64/000000/broken-link.png"
      />
      <h1 className="mt-5 mb-3">Something's not right...</h1>
      <br />
      <h4 className="mb-3">
        <Typed
          strings={[
            "Please check your internet connection and reload this page",
          ]}
          typeSpeed={30}
          startDelay={1000}
          cursorChar={""}
        />
      </h4>
      <br />

      <style jsx>
        {`
          .img {
            width: 100px;
          }
          .margin {
            margin-top: 100px;
          }
        `}
      </style>
    </div>
  )
}
