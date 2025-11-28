"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../component/containerStore";

function Store() {
  const [username, setUsername] = useState("");
  const [box, status] = useState(true);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (username.trim() !== "") {
      status(false);
    }
  };

  const label = ["Home", "Store", "Perks", "Famous", "Rules", "Staffs"];
  const link = [
    "/",
    "/store",
    "https://perks.luckynetwork.net/",
    "https://famous.luckynetwork.net/",
    "/rules",
    "/staff",
  ];

  return (
    <>
      {box && (
        <>
          <div className="flex justify-center items-center h-full overflow-y-auto w-full fixed inset-0 z-[999999] bg-black/50">
            <form>
              <div className="bg-gray-900 px-20 py-17 flex flex-col justify-center items-center rounded-[10px]">
                <p className="font-bold mb-3">Enter your username</p>
                <input
                  className="bg-gray-800 p-2 font-bold outline-none"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={handleLogin}
                  className={`mt-8 px-21 py-2 cursor-pointer bg-blue-700 hover:bg-blue-600`}
                >
                  <p className="font-bold">Login</p>
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <div className="w-screen h-[100px] bg-gradient-to-r from-indigo-950 to-blue-900 overflow-hidden">
        <div className="flex flex-row justify-start items-center">
          <div className="relative w-[200px] h-[100px] flex justify-center items-center mx-20">
            <Image
              src="/luckylogo_oeAKByG9P.webp"
              alt="luckylogo"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-15">
            {label.map((label, i) => (
              <Link
                key={i}
                href={link[i]}
                className="mx-5 text-[19px] cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="relative w-[40px] h-[40px] rounded-full border-2 overflow-hidden">
            <Image
              src="/devbp.png"
              alt="steve"
              fill
              className="object-contain"
            />
          </div>
          <p className="mx-3 font-bold text-[19px]">{username}</p>
        </div>
      </div>
      <div className="w-screen bg-gray-900">
        <Link href="/instructions">
          <div className="inline-block bg-red-500 cursor-pointer">
            <p className="mx-4 my-2 font-bold text-[15px]">
              Intruksi menggunakan LuckyCoin
            </p>
          </div>
        </Link>
        <div className="w-screen px-17 my-15 flex flex-row items-center">
          <h1 className="text-5xl ">
            <span className="font-bold">LuckyCoins</span> Package
          </h1>
          <div className="relative w-[50px] h-[50px] justify-center items-center flex mt-2 mx-3">
            <Image
              src="/coin.webp"
              alt="LuckyCoin"
              fill
              className="object-contain"
            />
          </div>
          <div className="ml-96 px-5 py-1 bg-amber-400 rounded-2xl flex flex-row items-center">
            <div className="relative w-5 h-5 mb-1">
              <Image
                src="/cart.81789158.svg"
                alt="cart"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-bold text-[21px] ml-2">Shopping Cart</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row">
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-row m-3 gap-5">
              <Container harga="10.000 IDR" gambar="/10k.png" coin="1000" />
              <Container harga="20.000 IDR" gambar="/20k.png" coin="2000" />
              <Container harga="30.000 IDR" gambar="/30k.png" coin="3000" />
            </div>
            <div className="flex flex-row m-3 gap-5">
              <Container harga="40.000 IDR" gambar="/40k.png" coin="4000" />
              <Container harga="100.000 IDR" gambar="/100k.png" coin="10000" />
              <Container harga="135.000 IDR" gambar="/135k.png" coin="14000" />
            </div>
            <div className="flex flex-row m-3 gap-5">
              <Container harga="170.000 IDR" gambar="/170k.png" coin="17200" />
              <Container harga="330.000 IDR" gambar="/20k.png" coin="35200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
