"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  const [showbox, boxstatus] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("play.luckynetwork.net");
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative overflow-hidden">
        <div className="flex flex-row w-full items-center justify-between z-40 absolute inset-0 ml-20">
          <div className="flex flex-col">
            <p className="text-white text-5xl font-bold">
              Experience Minecraft{" "}
              <span className="block mt-3">Like Never Before</span>
            </p>
            <div className="mt-8 flex flex-row items-center gap-5 overflow-auto">
              <p className="text-2xl font-bold text-red-400">Offline</p>
              <div className="bg-red-500 w-5 h-5 rounded-full"></div>
            </div>
            <button
              onClick={() => boxstatus(true)}
              className="mt-4 flex items-center justify-center w-[190px] h-[70px] bg-amber-400 rounded cursor-pointer font-bold italic text-3xl text-black hover:bg-amber-400/50 hover:text-white"
            >
              PLAY NOW
            </button>
          </div>
          <div className="w-[650px] h-[650px] absolute right-0">
            <Image
              src="/LN_HERO_RIGHT (3).avif"
              alt="img bg"
              width={650}
              height={650}
              className="object-con"
            />
          </div>
        </div>
        <Image
          src="/LN_BG_HERO.webp"
          alt="img bg"
          fill
          className="object-cover z-0"
        />
      </div>
      <div className="w-full h-screen relative overflow-hidden">
        <div className="flex items-center justify-center w-full h-screen ">
          <h2 className="absolute text-center font-bold text-3xl italic">
            PLAY TOGETHER WITH YOUR FRIENDS{" "}
            <span className="block">HAVE FUN TOGETHER!</span>
          </h2>
          <Image
            src="/LN_PLAY_TOGETHER.webp"
            alt="play together"
            width={800}
            height={1000}
            className=""
          />
        </div>
        <Image
          src="/LN_BG_PLAY.webp"
          alt="img bg"
          fill
          className="object-cover z-0"
        />
      </div>
      <div className="w-full h-screen relative bg-gradient-to-r from-purple-950 to-purple-800 ">
        <div className="flex flex-col justify-center w-full h-screen pl-[650px] pb-[100px]">
          <h2 className="font-bold text-3xl">
            What is <span className="text-amber-400">Lucky Network</span> ?
          </h2>
          <p className="mt-4 text-xl text-white font-light">
            LuckyNetwork started off as a big minecraft network that is based in
            Indonesia. Founded by FacedApollo and FatK in the 17th of August
            2017, they have managed to create one of the biggest minecraft
            server in the South East Asia region
          </p>
        </div>
        <Image
          src="/LN_FACEDAPOLLO.webp"
          alt="Face Apollo"
          width={400}
          height={400}
          className="absolute -top-24 -left-20 ml-32"
        />
      </div>
      {showbox && (
        <>
          <div
            onClick={() => boxstatus(false)}
            className="flex justify-center items-center h-full overflow-y-auto w-full fixed inset-0 z-[999999] bg-black/50"
          >
            <div className="flex justify-start flex-col rounded h-[1150px] w-[500px] border-2 border-purple-300 bg-gray-800 p-5 pt-80">
              <h2 className="text-2xl font-bold">Launch Minecraft:</h2>
              <p className="mt-2">
                Open your Minecraft launcher and log in with your Mojang
                account.
              </p>
              <h2 className="text-2xl font-bold mt-9">Access Multiplayer:</h2>
              <p className="mt-2">
                Click on the Multiplayer or Play Multiplayer option in the
                Minecraft main menu.
              </p>
              <h2 className="text-2xl font-bold mt-9">Add Server:</h2>
              <button
                onClick={copy}
                className="mt-5 w-[120px] h-[50px] bg-blue-100 rounded text-blue-800 font-bold text-[21px] flex justify-center items-center cursor-pointer hover:bg-blue-100/50"
              >
                Copy IP
              </button>
              <h2 className="text-2xl font-bold mt-9">Join the Server:</h2>
              <p className="mt-2">
                Once you ve added the server, select it from the server list and
                click Join Server or a similar option.
              </p>
              <h2 className="text-2xl font-bold mt-9">Server Rules:</h2>
              <p className="mt-2 break-words">
                Be aware of any specific rules or requirements the server may
                have.
              </p>
              <a
                href="/rules"
                className="underline text-[#f8c9c9] text-[18px] font-bold"
              >
                READ THE RULES
              </a>
              <h2 className="text-2xl font-bold mt-9">Enjoy The Game:</h2>
              <p className="mt-2 break-words">
                Once connected, youll enter the servers world, and you can start
                playing with others.
              </p>
              <button
                onClick={() => boxstatus(false)}
                className="w-[120px] h-[50px] mt-5 flex justify-center items-center bg-red-600 rounded cursor-pointer font-bold text-[20px] hover:bg-red-600/50"
              >
                close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
