'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiShoppingTag } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { FaWhatsapp, FaCaretDown } from "react-icons/fa";
import { useModal } from '@/context/ModalContext';

const page = () => {

  const {modal, openModal} = useModal()


  const collectionCards = [
    { label: "Unisex Clothing", url: "/", img: "/collection/unisex.jpg" },
    { label: "Gown", url: "/", img: "/collection/fashion-show2.jpg" },
    { label: "Tops", url: "/", img: "/collection/blonde.jpg" },
    { label: "Shoes", url: "/", img: "/collection/high-heels.jpg" },
    { label: "Lingerie", url: "/", img: "/collection/lingerie.jpg" },
    { label: "Bags", url: "/", img: "/collection/apparel.jpg" },
    { label: "Accessories", url: "/", img: "/collection/belt.jpg" },
    { label: "Skirt", url: "/", img: "/collection/skirt.jpg" },
    { label: "More", url: "/", img: "/wardrobe.jpg" },
  ];
  const newArrivalCards = [
    { label: "new", url: "/", img: "/newArrival/jeans.jpg" },
    { label: "new", url: "/", img: "/newArrival/woman-4390055_1280.jpg" },
    { label: "new", url: "/", img: "/newArrival/woman-6951774_1280.jpg" },
    { label: "new", url: "/", img: "/newArrival/woman.jpg" },
  ];

  return (
    <main className="">
      <section className="flex justify-between max-md:flex-col-reverse pt-3 ">
        <div className="w-full py-2 px-5 flex flex-col justify-center gap-4">
          <h1 className="lg:text-[3.5rem] text-center font-bold">
            Happy You Can Shop With Us
          </h1>
          <p className="text-sm md:text-center p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, non!
            Aperiam nihil ab, cumque soluta laboriosam ducimus necessitatibus
            asperiores voluptatem totam, aliquam ut et veniam alias nisi maxime
            autem dolorum consectetur a assumenda quia accusamus dolor fugit
            accusantium? Doloribus, repudiandae.
          </p>
          <Link
            href={"/"}
            className=" flex justify-center  bg-gray-200/50  items-center group max-lg:active:bg-gray-200/70 lg:hover:bg-gray-200/70 mt-3 md:mx-10 transform font-[sans-serif] rounded-sm transition-all duration-300 py-2 px-4  "
          >
            <button onClick={() => openModal('SignInModal')} className="uppercase  text-sm font-semibold">
              {" "}
              Shop Now
            </button>
            <i className="text-black  transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out  lg:group-hover:opacity-100 lg:group-hover:translate-x-1 max-lg:group-active:opacity-100 max-lg:group-active:translate-x-1 text-md">
              <CiShoppingTag />
            </i>
          </Link>
        </div>

        <div className="w-full ">
          <Image
            src={"/wardrobe.jpg"}
            alt="hero-img"
            width={800}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <section className="bg-gray-950 mt-4 text-black/70 text-white py-5">
        <div className="flex  flex-col pb-10  items-center gap-3 justify-center w-full">
          <h1 className="text-[2rem] max-md:text-xl text-[#fb3d93] ">
            Collections
          </h1>
          <p className="text-sm max-md:text-xs text-center px-2 lg:w-[50rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
            quo natus praesentium officia ducimus libero saepe, reprehenderit ut
            vitae eius nesciunt at, quas nemo et. Facere nam amet officiis?
          </p>
        </div>

        <div className="grid grid-cols-3  lg:gap-4 gap-2 max-md:grid-cols-2   p-3">
          {collectionCards.map((item, index) => {
            return (
              <Link href={item.url} key={index}>
                <div
                  className={`relative overflow-hidden ${
                    item.label === "More" ? "max-md:hidden" : ""
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    height={800}
                    width={800}
                    className="w-full max-md:h-[115px] lg:h-[300px] md:h-full  rounded-sm"
                  />

                  <div className="absolute rounded-sm px-2 py-2  lg:opacity-0 lg:translate-y-5 lg:hover:-translate-y-0 lg:hover:opacity-100 lg:transition-all lg:ease-in-out lg:duration-300  inset-0 bg-black/50">
                    <div>
                      <h1 className="uppercase max-lg:animate-pulse max-md:text-xs  ">
                        {item.label}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className=" py-4 flex flex-col md:flex-row-reverse justify-between items-center ">
        <div className="flex  flex-col pb-10 max-md:pb-5 px-3 items-center md:items-end    md:gap-4 gap-2 justify-center w-full">
          <h1 className="md:text-[4rem] text-xl text-center font-bold text-gray-700 md:text-right lg:leading-17 ">
            Our new Arrivals <br className="max-md:hidden" /> and{" "}
            <span className=" text-[#fb3d93]">Feautured</span>{" "}
            <br className="max-md:hidden" /> Products.
          </h1>
          <p className="text-sm md:w-[30rem] max-md:text-xs md:my-2 text-center  md:text-right ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
            quo natus praesentium officia ducimus libero saepe, reprehenderit ut
            vitae eius nesciunt at, quas nemo et. Facere nam amet officiis?
          </p>

          <Link
            href={"/"}
            className=" max-md:hidden flex justify-center   items-center group max-lg:active:bg-gray-200/70 lg:hover:bg-[#fb3d80] bg-[#fb3d93]  transform  bg-[#fb3d80] rounded-sm mt-2 w-fit transition-all duration-300 py-3 px-2  "
          >
            <button className="uppercase text-white  text-sm ">
              {" "}
              Click to start Shopping
            </button>
            <i className=" text-white  transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out  lg:group-hover:opacity-100 lg:group-hover:translate-x-1 max-lg:group-active:opacity-100 max-lg:group-active:translate-x-1 text-md">
              <GiShoppingCart />
            </i>
          </Link>
        </div>

        <div className="grid grid-cols-2 w-full lg:gap-4 gap-2 max-md:grid-cols-2   p-3 max-md:p-2">
          {newArrivalCards.map((item, index) => {
            return (
              <Link href={item.url} key={index}>
                <div className={`relative overflow-hidden `}>
                  <Image
                    src={item.img}
                    alt={item.label}
                    height={800}
                    width={800}
                    className="w-full h-full  lg:h-[480px] object-contain rounded-sm"
                  />

                  <div className="absolute      inset-0 bg-black/60">
                    <div className="p-1 md:p-2 lg:p-3 w-full flex justify-between items-center ">
                      <h1 className=" font-bold text-[#fb3d93] text-sm ">
                        {" "}
                        {item.label}
                      </h1>
                      <div className="w-2 h-2 animate-bounce rounded-full bg-[#fb3d93]"></div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href={"/"}
          className=" md:hidden flex justify-center   items-center group max-lg:active:bg-gray-200/70 lg:hover:bg-gray-200/70  transform  bg-[#fb3d93]  rounded-sm  transition-all duration-300 py-2 px-2 max-md:mt-3  "
        >
          <button className="uppercase  text-white text-sm ">
            {" "}
            Click to start Shopping
          </button>
          <i className=" text-white transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out  lg:group-hover:opacity-100 lg:group-hover:translate-x-1 max-lg:group-active:opacity-100 max-lg:group-active:translate-x-1 text-sm">
            <GiShoppingCart />
          </i>
        </Link>
      </section>

      <section className=" max-md:mt-5 md:py-4 max-md:overflow-hidden max-md:relative md:px-2 flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="flex max-md:absolute max-md:inset-0 max-md:bg-black/50 flex-col pb-10 max-md:pb-5  items-center md:items-start    md:gap-4 gap-2 justify-center w-full">
          <h1 className="md:text-[4rem] max-md:text-white  text-xl text-center font-bold text-gray-700 md:text-left lg:leading-17 uppercase ">
            Get <span className=" text-[#fb3d93]">10% </span> off your first
            order
          </h1>

          <form action="" className="flex flex-col gap-2 ">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="px-2 py-1 max-md:placeholder:text-gray-300 border max-md:border-gray-300 border-gray-500  outline-none h-10 lg:w-[25rem] max-md:w-full"
              placeholder="henkened544@gmail.com"
            />
            <button className="uppercase text-white flex justify-center   items-center group max-lg:active:bg-gray-200/70 lg:hover:bg-[#fb3d80] bg-[#fb3d93]  transform  bg-[#fb3d80] rounded-sm mt-2 w-fit transition-all duration-300 py-3 px-2 text-sm ">
              {" "}
              Subscribe to our newsletter
              <i className=" text-white  transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out  lg:group-hover:opacity-100 lg:group-hover:translate-x-1 max-lg:group-active:opacity-100 max-lg:group-active:translate-x-1 text-md">
                <GiShoppingCart />
              </i>
            </button>
          </form>
        </div>
        <div className="w-full">
          <Image src={"/influencer.jpg"} alt="" width={800} height={800} />
        </div>

        {/* <Link
          href={"/"}
          className=" md:hidden flex justify-center   items-center group max-lg:active:bg-gray-200/70 lg:hover:bg-gray-200/70  transform  bg-[#fb3d93]  rounded-sm  transition-all duration-300 py-2 px-2 max-md:mt-3  "
        >
          <button className="uppercase  text-white text-sm ">
            {" "}
            Click to start Shopping
          </button>
          <i className=" text-white transition-all duration-300 opacity-0 tranlate-x-0 ease-in-out  lg:group-hover:opacity-100 lg:group-hover:translate-x-1 max-lg:group-active:opacity-100 max-lg:group-active:translate-x-1 text-sm">
            <GiShoppingCart />
          </i>
        </Link> */}
      </section>

      <section className="my-10" id='one'>
        <div>
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-center text-gray-700 text-xl md:text-[2rem] font-semibold ">
              Contact <span className="text-[#fb3d93] ">Us</span>
            </h2>
            <MdConnectWithoutContact className="text-[#fb3d93] text-3xl  md:text-4xl" />
          </div>

          <div className="text-white md:bg-white/90 my-5  rounded-sm  md:mx-15 max-lg:grid-cols-1 max-md:flex max-md:flex-col-reverse   grid grid-cols-2">
            <div className=" max-md:my-4 flex justify-center md:justify-between max-md:grid-cols-2 max-md:p-1 max-md:items-center max-md:w-dvw md:p-18 max-md:gap-4 ">
              <div className="flex flex-col gap-5 text-center">
                <div className="shadow-[0px_0px_7px_#0a0a0a2f] bg-gray-700 rounded-xl overflow-hidden px-3 py-5 flex flex-col w-[13rem] max-md:w-full max-md:h-full  items-center gap-7 h-[12rem]">
                  <TiLocationOutline className="text-3xl" />
                  <div className="flex gap-3 flex-col items-center justify-center">
                    <h3 className="text-lg font-bold">My Location</h3>
                    <p className="text-xs font-semibold">
                      Saburi Dei-Dei Abuja Nigeria
                    </p>
                  </div>
                </div>

                <div className="shadow-[0px_0px_7px_#0a0a0a2f] bg-gray-700  rounded-xl overflow-hidden px-3 py-5 flex flex-col w-[13rem] max-md:w-full max-md:h-full  items-center gap-7 h-[12rem]">
                  <FiSmartphone className="text-3xl" />
                  <div className="flex gap-3 flex-col items-center justify-center">
                    <h3 className="text-lg font-bold">PHONE NUMBER</h3>
                    <p className="text-xs font-semibold">+2348060560593</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-5 text-center">
                <div className="shadow-[0px_0px_7px_#0a0a0a2f] bg-gray-700  rounded-xl overflow-hidden px-3 py-5 flex flex-col max-md:w-full max-md:h-full  items-center gap-7 h-[12rem] w-[13rem] ">
                  <MdOutlineEmail className="text-3xl" />
                  <div className="flex gap-3 flex-col items-center justify-center">
                    <h3 className="text-lg font-bold">E-MAIL ADDRESS</h3>
                    <p className="text-xs font-semibold">
                      anyanwud898@gmail.com
                    </p>
                  </div>
                </div>

                <Link
                  href={"https://wa.me/+2348060560593?text=Hello There"}
                  className="pointer "
                >
                  <div className="shadow-[0px_0px_7px_#0a0a0a2f]   rounded-xl overflow-hidden px-3 bg-green-700  active:bg-white  duration-300 transition-all active:text-green-700 max-md:w-full max-md:h-full  py-5 flex flex-col  items-center gap-7 h-[12rem] w-[13rem]  ">
                    <FaWhatsapp className="text-3xl" />
                    <div className="flex gap-3 flex-col items-center justify-center">
                      <h3 className="text-lg font-bold">WhatsApp</h3>
                      <p className="text-xs font-semibold">
                        Start your chat with us today
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="flex flex-col justify-center text-gray-700
             md:text-gray-700 shadow-xl  max-lg:mb-10 md:px-20 px-5 "
            >
              <h2 className="text-2xl max-md:hidden font-bold lg:mb-6 mb-3">
                Drop a Message
              </h2>
              <p className="md:hidden text-sm font-bold mb-3">
                You can reach me by sending a message you can also contact me by
                clicking the whatsapp option below or you cal reach me by using
                other methods
              </p>

              <div>
                <form className="space-y-5 md:py-4 ">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-sm max-md:text-xs text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      className="outline-none border rounded-md  p-2"
                    />
                    {/* there will be no popups for formik elements */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-sm max-md:text-xs text-gray-700"
                    >
                      E-mail
                    </label>
                    <input
                      name="emailAddress"
                      className="outline-none border rounded-md  p-2"
                    />
                    {/* there will be no popups for formik elements */}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-sm max-md:text-xs text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      as="textarea"
                      name="fieldText"
                      className="outline-none border rounded-md  p-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gray-700 text-white w-full rounded-md p-2 hover:bg-[#fb3d93] transition-all duration-200"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page
