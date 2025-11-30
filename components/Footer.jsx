import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram,  } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <main className="relative h-full w-full shadow-red-900 shadow-sm py-3 pl-2 bottom-0">
      <div className="flex max-md:flex-col max-md:gap-5 md:justify-between p-2">
        <p className="text-xl max-md:text-lg text-gray-700 w-full   ">
          Winnies Shoes & Bags
        </p>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-semibold uppercase max-md:text-sm text-xl">
            All about Shoping
          </h1>
          <div className="flex flex-col gap-1 text-sm">
            <Link href={"/"}>
              <button>Cart</button>
            </Link>
            <Link href={"/"}>
              <button>Products</button>
            </Link>
            <Link href={"/"}>
              <button>Today's promo </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-semibold uppercase max-md:text-sm text-xl">
            Got Questions?
          </h1>
          <div className="flex flex-col gap-1 text-sm">
            <Link href={"/"}>
              <button>About</button>
            </Link>
            <Link href={"/"}>
              <button>Contact</button>
            </Link>
            <Link href={"/"}>
              <button>FAQ</button>
            </Link>
            <Link href={"/"}>
              <button>Dev info</button>
            </Link>
            <Link href={"/"}>
              <button>Log out</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full text-center items-center">
          <div className="text-[#fb3d80] text-xl  flex space-x-5">
            <Link href={"/"}>
              <FaWhatsapp />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
            <Link href={"/"}>
              <FaFacebook />
            </Link>
            <Link href={"/"}>
              <SiGmail />
            </Link>
          </div>

          <div>
            <p> &copy; Winnies shoes and bags.</p>
            <p> All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer
