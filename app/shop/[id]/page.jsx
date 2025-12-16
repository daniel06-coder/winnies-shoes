import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import React from 'react'
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import { CgLoadbarSound } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import Image from 'next/image';
import { MdArrowBackIos } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";


export const fetchSingleProducts = async (id) => {
  if (!id) return null;

  const docRef = doc(db, "winnies-shoes", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }

  return null;
};


export default async function Page( props ) {

    const { id } = await props.params;

  const product = await fetchSingleProducts(id);

  if (!product) {
    return <div>No product found.</div>;
  }


  return (
    <div className="flex max-md:flex-col md:gap-3  ">
      <div className="md:w-[50%] md:h-[100%]">
        <div className="w-full relative">
          <img
            id="p-show"
            src={product.imageUrl}
            alt={product.productName}
            className="md:h-[50%] "
          />

          <Link
            href={"/shop"}
            className="w-[10%] absolute top-0 left-0 m-2 flex items-center "
          >
            <FaArrowLeft className="h-8 w-8 p-2 rounded-full text-center text-white bg-black/70 backdrop-blur-sm" />
          </Link>
        </div>
      </div>

      <div className="md:w-[50%] pr-1 pl-1 flex flex-col gap-2 py-2">
        <h3 className="text-xs text-black/40">EleganceMadeAffordable</h3>
        <h1 className="uppercase font-bold text-xl">{product.productName}</h1>

        <div className="flex justify-between gap-2 px-1 py-1 ">
          <div className="w-full bg-[#ebbdc1]/20 rounded-xl p-1">
            <div className="flex w-full justify-between">
              <BiSolidPurchaseTag className="text-[18rem] h-fit w-[70%] text-[#fb3d93]" />
              <Link
                className="w-[30%] flex justify-center mt-2 "
                href={"#p-show"}
              >
                <GoArrowUpRight className="h-6 w-6 text-gray-700 bg-white rounded-full" />
              </Link>
            </div>

            <div className="flex w-full py-2 flex-col ">
              <p className="text-xl font-bold">₦{product.productPrice}</p>
              <div className="flex justify-between items-center">
                <p className="line-through text-sm text-gray-400">
                  ₦{product.discountProductPrice}
                </p>
                <p className="uppercase text-sm">5% off</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-1 bg-gray-300/40 px-2 py-1 rounded-xl ">
              <div className="flex items-center pt-1 ">
                <CgLoadbarSound className="text-green-400 text-xl" />
                <p className="text-sm text-bold">In stock</p>
              </div>
              <div className="border w-full border-black/30"></div>
              <div className="flex items-center ">
                <div className="flex items-center justify-center gap-1 pr-3">
                  <MdEventAvailable />
                  <p className="text-sm">Available:</p>
                </div>

                <p className="font-bold">{product.productAmount}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex bg-gray-300/40 items-center rounded-xl gap-2 px-2 py-2 ">
                <Image
                  src={"/color-wheel.png"}
                  alt="clolor-wheel"
                  height={800}
                  width={800}
                  className="h-5 w-5 object-cover"
                />
                <div className="border  border-black/30 h-4"></div>
                <p className="text-sm  lowercase">{product.colorAvailable} </p>
              </div>
              <div className="flex bg-gray-300/40 items-center rounded-xl gap-2 px-2 py-2">
                <h3 className="text-sm uppercase font-bold">Sizes :</h3>
                <p className="text-sm uppercase">{product.sizeAvailable}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-1 py-1">
          <h1 className="uppercase font-bold text-xl">Description</h1>

          <p className="py-2">{product.productDescription}</p>
        </div>

        <div className="flex  justify-between w-full px-1  py-3 items-center">
          {/* <Link
            href={"/shop"}
            className="w-[10%] flex items-center "
          >
            <MdArrowBackIos className="h-5 w-5 p-1 rounded-full text-white bg-black" />
          </Link> */}

          <button className="w-full flex items-center justify-center bg-black text-white py-2 rounded-full gap-1">
            <span>ADD TO CART</span>
            <GiShoppingCart />
          </button>

          {/* <button className="w-[10%] flex justify-center">
            <CiSaveDown2 className="h-5 w-5 p-1 rounded-full text-white bg-black" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
 {
  
 }
