"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiShoppingTag, CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
// import { LuPanelLeftOpen } from "react-icons/lu";
import { collection, deleteDoc, doc, getDocs, setDoc  } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { GiShoppingCart } from "react-icons/gi";
// import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";



const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "winnies-shoes"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProducts(items);
    };

    getProducts();
  }, []);
  return { products, setProducts };
};

export const addToCart = async(userId, product) =>{
  try{
    await setDoc(
      doc(db, "users", userId, "cart", product.id),{
        ...product,
        qty:1,
        addedAt: Date.now(),
      }
    )
    console.log("added to cart in firebase!")
  } catch(error){
  console.error("error handling cart:", error)
}
};


const ShoppingPage = ( {session} ) => {
  console.log("SESSION:", session);


const [cartIndicator, setCartIndicator] = useState("false");

 const cartIndicatorFunc = (x) => {
  setCartIndicator(cartIndicator === x ? false : x)
 }
 const clearIndicator = () => {
   setCartIndicator(0);
 };

  const { products, setProducts } = useProducts();

  // search states and functions
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (searchValue, filterType) => {
    if (!searchValue.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      const searchUpper = searchValue.toUpperCase();

      switch (filterType) {
        case "bags":
          return product.bags?.toUpperCase().includes(searchUpper);
        case "shoes":
          return product.shoes?.toUpperCase().includes(searchUpper);
        case "gown":
          return product.gown?.toUpperCase().includes(searchUpper);
        case "accessories":
          return product.accessories?.toUpperCase().includes(searchUpper);
        case "skirt":
          return product.skirt?.toUpperCase().includes(searchUpper);
        case "top":
          return product.top?.toUpperCase().includes(searchUpper);
        case "lingerie":
          return product.lingerie?.toUpperCase().includes(searchUpper);
        case "purses":
          return product.purses?.toUpperCase().includes(searchUpper);
        case "random":
        default:
          return (
            product.productName?.toUpperCase().includes(searchUpper) ||
            product.bags?.toUpperCase().includes(searchUpper) ||
            product.shoes?.toUpperCase().includes(searchUpper) ||
            product.gown?.toUpperCase().includes(searchUpper) ||
            product.accessories?.toUpperCase().includes(searchUpper) ||
            product.skirt?.toUpperCase().includes(searchUpper) ||
            product.top?.toUpperCase().includes(searchUpper) ||
            product.lingerie?.toUpperCase().includes(searchUpper) ||
            product.purses?.toUpperCase().includes(searchUpper) ||
            product.product?.toUpperCase().includes(searchUpper)
          );
      }
    });

    setFilteredProducts(filtered);
  };
  // search change
  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value, filterBy);
  };
  // filter change
  const onFilterChange = (value) => {
    // const value = e.target.value;
    setFilterBy(value);
    handleSearch(searchTerm, value);
  };

  useEffect(() => {
    setFilteredProducts(products);
    if (searchTerm) {
      handleSearch(searchTerm, filterBy);
    }else{
      setFilteredProducts(products);
    }
  }, [products]);

 
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "winnies-shoes", id));

    const updatedProducts = products.filter((item) => item.id !== id);

    setProducts(updatedProducts);
  };

  const size = [
    { input: "Small", id: "/" },
    { input: "Medium", id: "/" },
    { input: "Large", id: "/" },
    { input: "XtraLarge", id: "/" },
    { input: "2XtraLarge", id: "/" },
    { input: "3XtraLarge", id: "/" },
    { input: "4XtraLarge", id: "/" },
    { input: "5XtraLarge", id: "/" },
  ];
  const color = [
    { input: "black", id: "/" },
    { input: "white", id: "/" },
    { input: "red", id: "/" },
    { input: "Blue", id: "/" },
    { input: "green", id: "/" },
    { input: "purple", id: "/" },
    { input: "wine", id: "/" },
    { input: "pink", id: "/" },
    { input: "yellow", id: "/" },
    { input: "orange", id: "/" },
    { input: "random", id: "/" },
  ];
  const selection = [
    { input: "Gown", id: "/" },
    { input: "Bags", id: "/" },
    { input: "Shoes", id: "/" },
    { input: "Accesories", id: "/" },
    { input: "Skirt", id: "/" },
    { input: "Tops", id: "/" },
    { input: "Lingerie", id: "/" },
    { input: "Heels", id: "/" },
    { input: "Purses", id: "/" },
    { input: "random", id: "/" },
  ];
  const [drop, setDrop] = useState(null);
  const dropFunc = (x) => {
    setDrop(drop === x ? null : x);
  };


  const handleAdd = (product) => {
  const userId = session?.user?.email || "guest-user";
  addToCart(userId, product);

};

  return (
    // remember to remove this when creating the cards
    <main className="relative">

      {/* cart page link */}
      <Link
        href={"/cart"}
        onClick={() => setCartIndicator(0)}
        className="fixed bottom-5 right-3 bg-[#fb3d93]/60 rounded-full z-4 backdrop-blur-sm p-2"
      >
        <GoDotFill
          className={`absolute -top-1 -left-1  text-green-600 text-xl animate-pulse ${
            cartIndicator === 1 ? "block" : "hidden "
          }`}
        />
        <GiShoppingCart className="text-xl rounded-full text-white" />
      </Link>

      {/* top nav */}
      <nav className="w-full sticky z-5 top-0 bg-gray-200 relative  h-15 py-3">
        <div className="flex justify-between px-2">
          <div className="w-full max-md:hidden max-lg:w-[40%] flex gap-1  items-center justify-start">
            <p className="uppercase text-gray-700 text-sm lg:text-md">
              Shop here
            </p>
            <CiShoppingTag className="lg:text-xl text-gray-700" />
          </div>
          <div className="w-full">
            <form action="" className="flex border rounded-sm border-gray-400">
              <input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={onSearchChange}
                onClick={() => dropFunc(3)}
                className="w-full py-2 max-lg:py-1  outline-none px-2"
              />
              <div className="bg-gray-400 text-white  px-2  flex items-center justify-center gap-1">
                <span className="max-md:hidden">Search</span>
                <CiSearch />
              </div>
            </form>
          </div>
          <div className="w-full max-md:hidden flex max-lg:w-[60%] justify-center space-x-2 lg:space-x-10 items-center">
            <div className="relative">
              <button
                onClick={() => dropFunc(1)}
                className="text-gray-700 flex justify-center lg:gap-1 lg:pt-2 items-center "
              >
                <h2 className="flex max-lg:text-sm ">Sort by size </h2>
                <FaCaretDown />
              </button>
              <div
                className={`absolute flex flex-col bg-gray-400/50 backdrop-blur-sm w-full text-center  ${
                  drop === 1 ? "flex " : "hidden"
                } `}
              >
                {size.map((item, index) => (
                  <div key={index} className="">
                    <div className="w-full border border-gray-200"></div>
                    <p className="px-1 py-1">{item.input}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => dropFunc(2)}
                className="text-gray-700 flex justify-center gap-1 lg:pt-2 items-center "
              >
                <h2 className="flex max-lg:text-sm ">Sort by color </h2>
                <FaCaretDown />
              </button>
              <div
                className={`absolute flex flex-col bg-gray-400/50 backdrop-blur-sm w-full text-center  ${
                  drop === 2 ? "flex" : "hidden"
                } `}
              >
                {color.map((item, index) => (
                  <div key={index} className="">
                    <div className="w-full border border-gray-200"></div>
                    <p className="px-1 py-1">{item.input}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={` scrollbar-hide flex  mb-2 top-4 max-lg:top-1 max-lg:overflow-x-scroll relative px-1  md:space-x-4 space-x-2 transition-full duration-300 ease-in-out transform ${
          drop === 3
            ? "translate-y-0 opacity-100 h-15 max-md:h-10"
            : "-translate-y-1 opacity-0 h-0"
        } `}
      >
        {selection.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => onFilterChange(item.productName)}
              className="w-full lg:h-9 max-lg:h-6  px-3 py-4 items-center flex justify-center  bg-gray-200 max-md:rounded-md rounded-sm "
            >
              <button className="uppercase text-sm   text-gray-800">
                {item.input}
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  p-2 lg:grid-cols-6 gap-2 lg:gap-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white/50 backdrop-blur-300 flex flex-col items-center  justify-center border border-gray-300 overflow-hidden "
          >
            <Link
              className="w-full max-md:h-[13rem] lg:h-[20rem]  "
              href={`/shop/${product.id}`}
            >
              <img
                src={product.imageUrl}
                className="w-full h-full object-cover"
              />
            </Link>

            <h2 className="w-full uppercase max-md:text-sm  px-2 max-md:px-1 ">
              {product.productName}{" "}
            </h2>

            <div className="flex w-full max-md:p-1 p-2  justify-between items-center">
              <div className="flex flex-col  w-full ">
                <span className=" w-full   text-sm">
                  ₦{product.productPrice}
                </span>
                <span className=" line-through w-full text-xs  text-gray-400">
                  ₦{product.discountProductPrice}
                </span>
              </div>

              {cartIndicator === 1 ? (
                <button
                  onClick={() => handleAdd(product)}
                  className="flex gap-1 w-full rounded-full justify-end pr-1 items-center "
                >
                  <GiShoppingCart className="text-[#fb3d93] animate-pulse border border-[#ebbdc1] rounded-full p-1 bg-[#ebbdc1]/20 h-7 w-7 max-md:text-xl" />
                </button>
              ) : (
                <button
                  onClick={() => handleAdd(product)}
                  className="flex gap-1 w-full rounded-full justify-end pr-1 items-center "
                >
                  <GiShoppingCart
                    onClick={() => cartIndicatorFunc(1)}
                    className="text-[#fb3d93] animate-pulse border border-[#ebbdc1] rounded-full p-1 bg-[#ebbdc1]/20 h-7 w-7 max-md:text-xl"
                  />
                </button>
              )}

              {/* <p>₦{product.productPrice}</p> */}
            </div>

            <div className="w-full flex justify-center text-sm text-gray-600 ">
              <p> {product.productAmount} left </p>
            </div>
            <div className="hidden">
              <button onClick={() => handleDelete(product.id)}>
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ShoppingPage
