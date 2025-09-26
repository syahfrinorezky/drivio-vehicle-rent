"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/constants/navigation";
import { fadeIn, slideIn } from "@/lib/motion";
import { useScroll } from "@/hooks/useScroll";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { Button } from "@/components/ui/button";

function PublicHeader() {
  const pathname = usePathname();
  const scrolled = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 shadow-md font-poppins",
          scrolled ? "bg-white/20 backdrop-blur-sm shadow-md" : "bg-white"
        )}
      >
        <div className="container mx-auto px-2 py-3 md:px-0 md:max-w-3xl lg:max-w-7xl flex justify-between items-center">
          <Link href="/" className="px-3 md:px-0">
            <Image
              src={"/logo/drivio-black.svg"}
              alt="Drivio Logo"
              width={800}
              height={800}
              className="w-12 h-12 object-contain"
            />
          </Link>

          <div className="hidden md:flex space-x-3">
            {NAVIGATION.public.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                  scrolled
                    ? {
                        "text-gray-900 hover:text-gray-700 bg-transparent":
                          pathname === item.href,
                        "text-gray-600 hover:text-gray-700 bg-transparent":
                          pathname !== item.href,
                      }
                    : {
                        "bg-gray-100 text-gray-900": pathname === item.href,
                        "text-gray-600 hover:bg-gray-100":
                          pathname !== item.href,
                      }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href={"/login"} className="hidden md:flex">
            <Button className="font-montserrat font-bold">SIGN IN</Button>
          </Link>

          <button
            type="button"
            className="md:hidden px-3 py-2 rounded-md"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <HiBars3BottomRight size={30} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/15 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-50"
            ></motion.div>
            <motion.div
              variants={slideIn("right")}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bg-white w-2/3 h-full z-50 shadow-md"
            >
              <div className="p-6 flex flex-col justify-between h-full font-poppins">
                <div className="flex flex-col space-y-6">
                  <button onClick={() => setIsOpen(false)} className="self-end">
                    <HiXMark size={30} className="mb-4" />
                  </button>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="p-3 rounded-full border border-gray-200">
                      <Image
                        src={"/logo/drivio-black.svg"}
                        alt="Drivio Logo"
                        width={800}
                        height={800}
                        className="w-18 h-18 object-contain"
                      />
                    </div>
                    <h1 className="text-lg font-bold font-montserrat">
                      Drivio
                    </h1>
                    <p className="text-center text-sm text-gray-500">
                      Rent a vehicle easily
                    </p>
                  </div>

                  <hr className="border border-gray-200" />

                  <div className="space-y-1">
                    {NAVIGATION.public.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                          "flex items-center px-3 py-4 font-medium rounded-md",
                          {
                            "bg-gray-100 text-gray-900": pathname === item.href,
                            "text-gray-600 hover:bg-gray-100":
                              pathname !== item.href,
                          }
                        )}
                      >
                        {pathname === item.href && (
                          <item.ActiveIcon className="mr-3 h-5 w-5 text-neutral-800" />
                        )}
                        {pathname !== item.href && (
                          <item.Icon className="mr-3 h-5 w-5 text-gray-400" />
                        )}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link href={"/register"}>
                    <Button
                      variant="outline"
                      className="h-12 w-full font-montserrat font-bold"
                    >
                      SIGN UP
                    </Button>
                  </Link>
                  <Link href={"/login"}>
                    <Button
                      variant="default"
                      className="h-12 w-full font-montserrat font-bold"
                    >
                      SIGN IN
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PublicHeader;
