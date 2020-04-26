export default function Footer() {
  return (
    <div className="relative top-5 text-center mx-auto flex justify-center items-center">
      <div className="text-center">
        <span className="text-black">
          Coded with{" "}
          <span className="text-red-600" aria-label="love" role="img">
            ❤️
          </span>{" "}
          by{" "}
        </span>
        <a
          href="https://github.com/rammyblog"
          rel="noopener noreferrer"
          target="_blank"
          className="text-teal-500 font-bold ml-1 hover:font-bold"
        >
          Onasanya Babatunde
        </a>
        .
      </div>
    </div>
  )
}
