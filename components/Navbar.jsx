"use client";


import Link from "next/link";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { CiShoppingTag, CiLight, CiDark } from "react-icons/ci";
import { PiHighHeel } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";
// import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { useModal } from "@/context/ModalContext";
import { isAdmin } from "@/app/admin/isAdmin";

const Navbar = () => {
  const navLinks = [
    { label: "home", icon: <VscHome />, url: "/" },
    { label: "shop", icon: <CiShoppingTag />, url: "/shop" },
    { label: "About", icon: <PiHighHeel />, url: "/about" },
    { label: "Contact", icon: <MdConnectWithoutContact />, url: "/#one" },
  ];

  const { data: session } = useSession();
  // console.log(session);

  const [navDrop, setNavDrop] = useState(false);

  const navDropFunc = (x) => {
    setNavDrop(navDrop === x ? false : x);
  };

  const {modal, openModal} = useModal()
  // console.log({modal,openModal})

  return (
    <nav className="flex justify-between items-center z-30  shadow-sm max-md:px-2  p-3">
      <RiMenu5Line
        onClick={() => navDropFunc(1)}
        className={`lg:hidden text-xl z-32 ${
          navDrop === 1 ? "flex fixed" : " "
        }`}
      />
      <div className="hover:bg-gray-200/50 max-lg:m-auto   p-1">
        <p className="text-md text-gray-700 max-lg:absolute max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:top-5   ">
          Winnies Shoes & Bags
        </p>
      </div>

      {/* laptop nav */}
      <div className="max-lg:hidden flex justify-center items-center gap-10 px-2">
        {navLinks.map((items, index) => {
          return (
            <Link
              href={items.url}
              key={index}
              className="flex items-center uppercase justify-center group hover:bg-gray-200/50 transform font-[sans-serif] rounded-sm transition-all duration-300 p-2 "
            >
              <li className="uppercase  text-sm font-semibold">
                {items.label}
              </li>
              <i className="text-black  transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out group-hover:opacity-100 group-hover:translate-x-1 text-md">
                {items.icon}
              </i>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 justify-center">
        {session ? (
          <div className="relative top-1  max-md:hidden">
            <button onClick={() => navDropFunc(3)} className="">
              <img
                src={session?.user?.image}
                alt={
                  session?.user?.name
                    ? String(session.user.name).slice(0, 2).toUpperCase()
                    : "User"
                }
                className="rounded-full h-6 w-6 lg:h-8 lg:w-8  "
              />
            </button>

            <div
              className={`absolute z-10  -right-5 py-4 px-1 bg-white/70 backdrop-blur-sm w-[6rem] flex gap-2 flex-col 
             ${navDrop === 3 ? "flex " : "hidden"} `}
            >
              <button onClick={() => signOut("google")} className="text-sm">
                Sign Out
              </button>
              <button className="text-sm">View Profile</button>
              {isAdmin(session) && (
                <Link href={"/admin"} className="text-center">
                  <button className="text-sm">Upload</button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => openModal("SignInModal")}
            className="text-sm p-2 max-md:hidden rounded-sm text-gray-700 bg-gray-200/50 hover:bg-gray-200/70  "
          >
            Sign Up
          </button>
        )}

        {/* <div>
          <RiAccountCircleLine />
        </div> */}

        <div className="relative ">
          <button
            onClick={() => navDropFunc(2)}
            className="  text-gray-700  rounded-full max-md:px-1 p-2 hover:text-black hover:bg-gray-200/50"
          >
            <IoMdMore className="text-xl " />
          </button>
          <div
            className={`absolute z-10 font-[sans-serif] text-gray-700 right-0  top-12 backdrop-blur-sm bg-white/80 border py-3  border-gray-100 right-0 flex flex-col duration-500  ease-in-out transition-all gap-2 border-none outline-none ${
              navDrop === 2
                ? "max-h-50 opacity-100 pointer-events-auto"
                : "max-h-0 opacity-0 pointer-events-none"
            } `}
          >
            <Link
              href={"/cart"}
              className="flex border-b border-gray-700/20 w-full gap-1 justify-center  px-4 pt-3 pb-1  items-center"
            >
              <li className="text-sm">Cart</li>{" "}
              <i className=" ">
                <GiShoppingCart />
              </i>{" "}
            </Link>
            {/* lightmode */}
            <div className="flex border-b border-gray-700/20 w-full gap-1 justify-center  px-4 pt-3 pb-1  items-center">
              <li className="text-sm">Light </li>{" "}
              <i className="">
                <CiLight />
              </i>{" "}
            </div>
            {/* darkmode */}
            <div className="flex border-b border-gray-700/20 w-full gap-1 justify-center  px-4 pt-3 pb-1 items-center">
              <li className="text-sm">Dark </li>{" "}
              <i className="">
                <CiDark />
              </i>{" "}
            </div>
            <div className="flex  gap-1 justify-center  px-4 pt-3  items-center">
              <li className="text-sm uppercase">Faq</li>{" "}
              <i className="">
                <FaQuestion />
              </i>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`z-30 lg:hidden  fixed top-0 flex flex-col  bg-white h-full max-lg:w-[30%] max-md:w-[70%] items-center   gap-10 pt-10  left-0 transform duration-300 transition-all ${
          navDrop === 1
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none -translate-x-full"
        }  `}
      >
        <div className="  py-3 flex flex-col gap-4">
          {/* a condition will be written down here when the user is signed out the sign in button will appear if not the users profile and name will apperar */}

          {session ? (
            <div className="md:opacity-0 md:pointer-event-none flex flex-col gap-3 p-2 justify-center items-center">
              <img
                src={session?.user?.image}
                alt={
                  session?.user?.name
                    ? String(session?.user?.name).slice(0, 2).toUpperCase()
                    : "User"
                }
                className="h-15 w-15 object-cover rounded-full"
              />

              <div className="text-sm text-black font-[sans-serif]">
                {session?.user?.name}
              </div>
              {isAdmin(session) && (
                <Link href={"/admin"} className="text-center">
                  <button className="text-sm">Upload</button>
                </Link>
              )}
              <button
                onClick={() => signOut("google")}
                className="text-sm p-2  rounded-sm text-gray-700 bg-gray-200/50 active:bg-gray-200/70  "
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => openModal("SignInModal")}
              className=" text-sm p-2 md:hidden rounded-sm text-gray-700 bg-gray-200/50  "
            >
              Sign Up
            </button>
          )}
        </div>

        <div className="flex flex-col w-full gap-2 py-3 bg-[#ebbdc1]/20 h-full">
          {navLinks.map((items, index) => {
            return (
              <Link
                onClick={() => navDropFunc(1)}
                href={items.url}
                key={index}
                className=" flex w-full  active:bg-gray-200/50  py-2 pl-2 "
              >
                <div className="flex items-center ">
                  <span className="uppercase text-sm font-[sans-serif]">
                    {items.label}{" "}
                  </span>
                  {items.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
