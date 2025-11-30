'use client'
import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '@/config/firebaseConfig';

const AdminUpload = ({session}) => {


  const [imageSelected, setImageSelected] = useState(null)

  const uploadImage = async ( ) => {
      if (!imageSelected) {
        alert("Select an image first!");
        return;
      }
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "winnies");
    try {
      const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dh6jtczkw/image/upload",
          formData
        )

        const imageUrl = res.data.secure_url;
        console.log("Uploaded image:", imageUrl)

        saveProductToFirestore(imageUrl)
    } catch (error) {
      alert('Upload Failed !! Try Again')
    }

   
  }

  const saveProductToFirestore = async (imageUrl) => {

    const productName = document.querySelector("input[name='productName']").value;
    const productPrice = document.querySelector("input[name='productPrice']").value;
    const discountProductPrice = document.querySelector("input[name='discountProductPrice']").value;
    const productAmount = document.querySelector("input[name='productAmount']").value;
    const colorAvailable = document.querySelector("input[name='colorAvailable']").value;
    const sizeAvailable = document.querySelector("input[name='sizeAvailable']").value;

    try {
      await addDoc(collection(db, "winnies-shoes"), {
        productName,
        productPrice,
        discountProductPrice,
        productAmount,
        colorAvailable,
        sizeAvailable,
        imageUrl,
        createdAt: new Date(),
      });

      alert("product saved succesfully")
    } catch (error) {
      console.log('error saving products', error)
      alert('error saving products', error)
    }


  }




  return (
    <main className="">
      <div className=" pt-5 md:pt-10 w-full">
        {/* image product-name p-price amount-available colors-available size-available */}

        <form action="" className=" flex lg:justify-between lg:items-center lg:px-3  max-lg:flex-col w-full max-md:w-full px-2 ">

          {/* image upload */}
          <div className="w-full flex  flex-col lg:mb-10 items-center">
            <label htmlFor="file" name="file" className='text-md uppercase font-bold mb-4'>
              Upload Photo here
            </label>
            <div className="flex relative border h-[8rem] w-[8rem] md:h-[11rem]  md:w-[11rem] items-center justify-center">
              <IoIosAddCircle className="absolute w-fit text-xl -z-1 pointer-event-none" />
              <input
              onChange={(e) => setImageSelected(e.target.files[0])}
                type="file"
                placeholder=""
                className=" bg-white-200/20 w-full h-full p-5"
              />
            </div>
          </div>

          <div className='flex lg:w-full flex-col lg:px-15  gap-1 pt-8 pb-6'>
            <label
              htmlFor="productName"
              className="text-md font-semibold uppercase   "
            >
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />

            <label
              htmlFor="productPrice"
              className="text-md font-semibold uppercase  "
            >
              Price
            </label>
            <input
              type="number"
              name="productPrice"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />

            <label
              htmlFor="discountProductPrice"
              className="text-md font-semibold uppercase  "
            >
              Discount Price
            </label>
            <input
              type="number"
              name="discountProductPrice"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />

            <label
              htmlFor="productAmount"
              className="text-md font-semibold uppercase lg:row-span-2  "
            >
              Amount Available
            </label>
            <input
              type="number"
              name="productAmount"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />

            <label
              htmlFor="colorAvailable"
              className="text-md font-semibold uppercase  "
            >
              Colors available
            </label>
            <input
              type="text"
              name="colorAvailable"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />

            <label
              htmlFor="sizeAvailable"
              className="text-md font-semibold uppercase  "
            >
              Size available
            </label>
            <input
              type="text"
              name="sizeAvailable"
              className="h-10 border border-gray-400 rounded-sm px-2 py-1 outline-none mb-2"
            />
          <button type='button' onClick={uploadImage} className='bg-gray-700 m-auto w-full lg:w-fit py-2 px-1 lg:px-10 rounded-sm text-white text-xl'>Submit</button>
          </div>

        </form>
      </div>
    </main>
  );
}

export default AdminUpload
