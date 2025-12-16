"use client";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useModal } from "@/context/ModalContext";

export const getCartItems = async (userId) => {
  const cartRef = collection(db, "users", userId, "cart");
  const snapshot = await getDocs(cartRef);

return snapshot.docs.map((doc) => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    productPrice: Number(data.productPrice) || 0,
    qty: Number(data.qty) || 1,
    productAmount: Number(data.productAmount) || 1, // ✅ FIXED
  };
});

};





const CartPage = () => {
  const [cart, setCart] = useState([]);
    const { data: session } = useSession();
    const userId = session?.user?.email || "guest-user";
    console.log(session)

     const { modal, openModal } = useModal();

  useEffect(() => {
    if (!userId) return;

    const loadCart = async () => {
      const items = await getCartItems(userId);
      setCart(items);
    };

    loadCart();
  }, [userId]);

   
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", userId, "cart", id));

      // ⭐ FIXED: filter cart, not products
      const updatedCart = cart.filter((item) => item.id !== id);

      setCart(updatedCart);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };




const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: Math.min(item.qty + 1, item.productAmount),
          }
        : item
    )
  );
};


const decreaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: Math.max(item.qty - 1, 1),
          }
        : item
    )
  );
};


  const totalAmount = cart.reduce(
    (sum, item) => sum + item.productPrice * item.qty,
    0
  );

    const handlePayNow = () => {
    if (cart.length === 0){
      alert("Your cart is empty");
      return;
    }
 
    const generateOrderRef = () => {
      return "ORD" + Math.floor(100000 + Math.random() * 900000);
    };
  const orderLines = cart.map((item, index) => {
    const subtotal = item.productPrice * item.qty;
    return `${index + 1}. ${item.productName} Qty: ${
      item.qty
    } 
    Price: ₦${item.productPrice.toLocaleString()} 
    subTotal: ₦${subtotal.toLocaleString()}`;
  })

 const message = `
    NEW ORDER 🛒

   ${orderLines.join("\n\n")}
   --------------------

   TOTAL: ₦${totalAmount.toLocaleString()}
   --------------------
   
   Customer: ${session?.user?.name || "Guest"}
   Email: ${session?.user?.email || "N/A"}
   orderID: ${generateOrderRef()}
   `;
   
const encodedMessage = encodeURIComponent(message);

  const whatsappNumber = "07086510139";

  window.open(
    `https://wa.me/${+2347086510139}?text=${encodedMessage}`,
    "_blank"
  );
};


  return (
    <main className="relative">
      {/* popUp */}

      {/* welcome [user] to your cart here are your products so far  */}
      <div className="sticky top-0 flex items-center justify-between w-full px-2 bg-white py-4 ">
        <Link href={"/shop"} className="w-[10%] flex items-center ">
          <FaArrowLeft className="h-6 w-6 p-1 rounded-full text-center text-white bg-black/70 backdrop-blur-sm" />
        </Link>
        <h1 className="text-md font-bold">
          Welcome {session?.user?.name.slice(0, 7)}
        </h1>
        {/* <h5>Your carted items are below</h5> */}
      </div>

      {cart.length === 0 && (
        <div className="justify-center flex w-full h-dvh ">
          <p className="text-xl mt-5 text-gray-300 uppercase">
            No items in cart
          </p>
        </div>
      )}

      <div className=" flex gap-4 px-1 mb-15 mt-3 w-full py-4 flex-col">
        {cart.map((item) => (
          <div key={item.id} className="flex px-1 py-2 w-full ">
            <div className="max-md:w-[8rem] max-md:h-[8rem] max-md:w-[30%]">
              <img
                src={item.imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[70%] flex flex-col px-2 ">
              <div className="flex justify-between items-center  gap-1  w-full">
                <p className="uppercase text-sm  ">{item.productName}</p>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete className="text-gray-600" />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Color: {item.colorAvailable}
              </p>
              <p className="text-sm text-gray-500">
                Size: {item.sizeAvailable}
              </p>
              <div className="flex justify-between items-end w-full mt-auto ">
                <p className="text-sm font-bold">
                  {" "}
                  ₦{item.productPrice * item.qty}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <IoMdRemove
                    onClick={() => decreaseQty(item.id)}
                    className="p-1 text-xl rounded-full border"
                  />
                  <span id="productCount">{item.qty}</span>
                  <IoMdAdd
                    onClick={() => increaseQty(item.id)}
                    className="p-1 text-xl rounded-full border"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full px-2 border-t py-2 border-gray-500  ">
        <div className="flex justify-between w-full">
          <p>Total Purchased:</p>
          <p> ₦{totalAmount.toLocaleString()}</p>
        </div>
        <button
          onClick={handlePayNow}
          // onClick={() => openModal("ConfirmationModal")}
          className="w-full bg-black/60 text-white py-2 uppercase rounded-sm"
        >
          Pay Now
        </button>
      </div>
    </main>
  );
};

export default CartPage;
