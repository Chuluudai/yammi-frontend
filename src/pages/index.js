import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Topcomment from "./components/topcomm";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" bg-beige w-screen h-[300vh]">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="w-full h-8 text-2xl pl-[7%] mb-4 uppercase">
          Commentors
        </div>
        <Topcomment></Topcomment>
      </div>
    </>
  );
}
