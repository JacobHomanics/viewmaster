"use client";

// import Link from "next/link";
import type { NextPage } from "next";

// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <div
      className="flex justify-center items-center gap-5 p-5 bg-rose-700 rounded-lg"
      style={{
        backgroundImage: "/path-to-your-viewmaster-image.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img id="left-eye" src="left-eye.png" alt="Left Eye Image" className="w-64 h-auto rounded-lg shadow-lg" />
      <img id="right-eye" src="right-eye.png" alt="Right Eye Image" className="w-64 h-auto rounded-lg shadow-lg" />
    </div>
  );
};

export default Home;
