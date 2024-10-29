"use client";

// import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import viewmasterColor from "../public/viewmaster-detailed.svg";
import viewmasterPlain from "../public/viewmaster-plain.svg";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import type { NextPage } from "next";

// let target = 0;
// let current = 0;
// const ease = 0.01;

const Home: NextPage = () => {
  // const [target, setTarget] = useState(0);

  // const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  // const [width, setWidth] = useState(0);

  // const maxScroll = width - window.innerWidth;

  // function lerp(start: number, end: number, factor: number) {
  //   return start + (end - start) * factor;
  // }

  // const update = useCallback(() => {
  //   current = lerp(current, target, ease);
  // }, [target]);

  // useEffect(() => {
  //   if (sliderWrapperRef.current) {
  //     setWidth(sliderWrapperRef.current.offsetWidth);
  //   }

  //   const handleResize = () => {
  //     if (sliderWrapperRef.current) {
  //       setWidth(sliderWrapperRef.current.offsetWidth);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("wheel", e => {
  //     let calcTarget = target + e.deltaY;
  //     calcTarget = Math.max(0, calcTarget);
  //     calcTarget = Math.min(maxScroll, calcTarget);

  //     setTarget(calcTarget);
  //   });

  //   return () => window.removeEventListener("resize", handleResize);
  // }, [maxScroll, target]);

  // useEffect(() => {
  //   update();
  // }, [update]);

  // useGSAP(() => {
  //   gsap.set(".slider-wrapper", {
  //     x: -current,
  //   });

  //   gsap.from(".slide", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //   });
  // });

  return (
    <>
      {/* <div className="slider w-full h-full overflow-hidden">
        <div
          // ref={sliderWrapperRef}
          className="slider-wrapper w-max-content flex h-full align-center gap-[100px] py-[150px]"
        >
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
          <div className="slide w-[500px] h-[500px]">
            <Image src="/slides/slide-1.png" alt="Slide 1" width={512} height={512} className="object-cover" />
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center justify-center"> */}
      <div className="relative flex justify-center items-center mt-[100px]">
        <div className="w-[300px] md:w-[400px] h-[100px] md:h-[150px]">
          <img src="/landscape.jpg" alt="Slide 1" className="w-full h-full" />
        </div>

        <Image src={viewmasterColor} alt="Viewmaster Color" width={500} height={720} className="absolute" />
      </div>

      <div className="relative flex justify-center items-center mt-[200px]">
        <div className="w-[300px] md:w-[400px] h-[100px] md:h-[150px]">
          <img src="/landscape.jpg" alt="Slide 1" className="w-full h-full" />
        </div>

        <Image src={viewmasterPlain} alt="Viewmaster Plain" width={500} height={720} className="absolute" />
      </div>

      {/* </div> */}
      {/* 
      <div
        className="flex justify-center items-center gap-5 p-5 bg-rose-700 rounded-lg"
        style={{
          backgroundImage: "url('/path-to-your-viewmaster-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image src="/left-eye.png" alt="Left Eye Image" width={256} height={256} className="rounded-lg shadow-lg" />
        <Image src="/right-eye.png" alt="Right Eye Image" width={256} height={256} className="rounded-lg shadow-lg" /> */}
      {/* </div> */}
    </>
  );
};

export default Home;
