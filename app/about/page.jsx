import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";

function page() {
  return (
    <main className="flex flex-col gap-2 max-md:gap-5">
      <section className="flex flex-col gap-2 max-md:gap-5">
        {/* about company */}
        <div className="flex md:justify-between max-md:flex-col ">
          <div className="w-full">
            {/* hidden on tablet */}
            <Image
              src={"/collection/womans.jpg"}
              alt="woman in snow"
              height={800}
              width={800}
              className="md:hidden lg:flex max-md:flex  "
            />
            {/* not hidden on tablet */}
            <Image
              src={"/newArrival/woman.jpg"}
              alt="woman in snow"
              height={800}
              width={800}
              className="md:flex lg:hidden max-md:hidden  "
            />
          </div>
          <div className="w-full md:p pt-3 md:px-4 text-right max-md:text-center  flex flex-col justify-center gap-3 md:gap-6">
            <h1 className="text-3xl max-lg:text-2xl text-gray-700 text-semibold">
              Winnies S&B, <span className="text-[#fb3d93]"> Who are we?</span>
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptas omnis autem eos, cupiditate amet quam nulla asperiores
              est voluptatibus cumque consequatur possimus minus quas magnam
              reiciendis ipsam rem vero? Libero fuga praesentium iste voluptates
              sint eaque, dolorem suscipit quia rerum hic sapiente fugiat, vitae
              mollitia, sit pariatur! Repellendus praesentium iure quisquam cum
              numquam atque debitis sapiente architecto non dolorem? Accusantium
              harum unde cum voluptatibus molestias necessitatibus. Aspernatur,
              deserunt quis.
            </p>
          </div>
        </div>
        {/* What we offer */}
        <div className="flex md:justify-between max-md:flex-col-reverse">
          <div className="w-full md:p pt-3 md:px-4 max-md:text-center  flex flex-col justify-center gap-3 md:gap-6">
            <h1 className="text-3xl max-lg:text-2xl text-gray-700 text-semibold">
              Winnies S&B,{" "}
              <span className="text-[#fb3d93]"> What do we offer?</span>
            </h1>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptas omnis autem eos, cupiditate amet quam nulla asperiores
              est voluptatibus cumque consequatur possimus minus quas magnam
              reiciendis ipsam rem vero? Libero fuga praesentium iste voluptates
              sint eaque, dolorem suscipit quia rerum hic sapiente fugiat, vitae
              mollitia, sit pariatur! Repellendus praesentium iure quisquam cum
              numquam atque debitis sapiente architecto non dolorem? Accusantium
              harum unde cum voluptatibus molestias necessitatibus. Aspernatur,
              deserunt quis.
            </p>
          </div>

          <div className="w-full">
            {/* hidden on tablet */}
            <Image
              src={"/collection/womans.jpg"}
              alt="woman in snow"
              height={800}
              width={800}
              className="md:hidden lg:flex max-md:flex  "
            />
            {/* not hidden on tablet */}
            <Image
              src={"/newArrival/woman.jpg"}
              alt="woman in snow"
              height={800}
              width={800}
              className="md:flex lg:hidden max-md:hidden  "
            />
          </div>
        </div>
      </section>

      {/* location */}
      <div className="flex items-center justify-center gap-4 flex-col w-full my-5">
        <h1 className="text-semibold text-xl lg:text-3xl text-gray-700 text-center">
          Need <span className="text-[#fb3d93]">a physical interaction?</span>{" "}
          You can Find us at
        </h1>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden  relative">
          <Image
            src={"/collection/apparel.jpg"}
            alt="woman in snow"
            height={800}
            width={800}
            className="w-full "
          />
          <div className="absolute flex flex-col items-center justify-center px-4 inset-0 bg-black/70 gap-5 md:gap-10 text-white ">
            <p className="text-sm text-center md:text-3xl md:w-[70%]">
              Our shops can be located at kubwa village market block a no 30 and
              block d number 20
            </p>
            <button className="md:text-xl bg-[#fb3d80] px-6 py-2 rounded-sm">
              Click To View Map
            </button>
          </div>
        </div>
      </div>
      {/* meet the owner */}
      <div className="flex max-md:flex-col md:justify-between py-3 px-2">
        <h1 className="text-2xl text-gray-700 text-semibold max-md:text-center md:hidden mb-4">
          Meet the face behind the Fashion Enterprise
        </h1>
        <div className="w-full flex justify-center">
          <Image
            src={"/collection/womans.jpg"}
            alt="woman in snow"
            height={800}
            width={800}
            className="rounded-full h-50 w-50"
          />
        </div>

        <div className="w-full flex flex-col justify-center gap-4 py-3 px-2 ">
          <h1 className="text-2xl text-semibold max-md:text-center max-md:hidden">
            Meet the face behind the Fashion Enterprise
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quod, quos aspernatur earum laboriosam non dolor quibusdam alias,
            sapiente, architecto quo esse fuga porro! Consectetur doloribus
            temporibus molestiae perferendis libero ad quia quas, quidem odit
            velit asperiores. In distinctio sit nihil corrupti accusamus
            nesciunt natus enim. Quod non natus modi!
          </p>
          <div className="flex gap-2">
            <h3 className="text-md uppercase">you can vist me at:</h3>
            <div className="text-[#fb3d80] text-xl  flex gap-3">
              <Link href={"/"}>
                <FaWhatsapp />
              </Link>
              <Link href={"/"}>
                <FaInstagram />
              </Link>
              <Link href={"/"}>
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  );
}

export default page
