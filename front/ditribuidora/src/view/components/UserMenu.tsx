import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <header className="flex flex-wrap items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
          <Link to="/" className="flex flex-1 justify-center items-center sm:justify-start gap-4 text-[#0e141b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#0e141b] text-lg font-bold text-center leading-tight tracking-[-0.015em]">Inventário</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-2">
            <div className="flex items-center gap-9">
              <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/">Dashboard</Link>
            </div>
            <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center border-teal-100">
              <span className="text-sm tracking-[-0.5px] font-medium text-teal-900 flex items-center justify-center">
                 GJ
              </span>
            </div>
          </div>
        </header>
    </div>
  )
}

