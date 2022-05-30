import Image from "next/image";
import logo from "../public/images/blue-fish-logo.svg";
import homelogo from "../public/images/home-icon.svg";
export default function header() {
  const countries = [
    "USA",
    "Canada",
    "Europe",
    "UK",
    "Hong Kong",
    "Singapore",
    "India",
  ];
  return (
    <header className="sticky top-0 font-mont">
      <div className="container flex items-center justify-between mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="" className="flex">
            <Image src={logo} alt="Blue Fish Logo" priority />
          </a>
        </div>

        <div className="flex items-center justify-end flex-1">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="items-center justify-center hidden h-16 text-xl font-normal space-x-7 lg:flex ">
            <a className="-mb-1 leading-7 text-bluefish-300" href="">
              <Image src={homelogo} alt="Blue Fish Logo" priority />
            </a>
            <a className="leading-7 text-bluefish-300" href="">
              The School
            </a>
            <a className="leading-7 text-bluefish-300" href="">
              Academics
            </a>
            <a className="leading-7 text-bluefish-300" href="">
              Admissions
            </a>
            <a className="leading-7 text-bluefish-300" href="">
              Student’s Works
            </a>
          </nav>
        </div>
      </div>
      <div className="border-b border-white bg-amber-500">
        <div className="container flex py-3 mx-auto text-xl font-bold text-white sm:px-6 lg:px-8">
          <p className="font-normal ">Choose your Destination</p>
          <span className="flex-auto  -ml-[3px] h-[21px] -mr-3 border-b border-white"></span>
          <div className="flex items-center space-x-5">
            {countries.map((country, i) => (
              <a key={i} href="" className="">
                {country}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
