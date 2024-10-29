"use client";

// import { useCallback, useEffect, useRef, useState } from "react";
import { useState } from "react";
import Image from "next/image";
// import viewmasterColor from "../public/viewmaster-detailed.svg";
import viewmasterPlain from "../public/viewmaster-plain.svg";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import type { NextPage } from "next";

// let target = 0;
// let current = 0;
// const ease = 0.01;

const images = ["/landscape.jpg", "/landscape-2.png", "/landscape-3.png", "/landscape-4.jpg"];

const Home: NextPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
      {/* <div className="relative flex justify-center items-center mt-[100px]">
        <div className="w-[300px] md:w-[400px] h-[100px] md:h-[150px]">
          <img src="/landscape.jpg" alt="Slide 1" className="w-full h-full" />
        </div>

        <Image src={viewmasterColor} alt="Viewmaster Color" width={500} height={720} className="absolute" />
      </div> */}

      <div className="relative flex items-center justify-center gap-5">
        <div className="flex justify-center items-center mt-[200px]">
          <div className="w-[900px] h-64 md:h-96 relative">
            <Image
              src={images[selectedImageIndex]}
              alt="Stretch Image"
              className="w-full h-full object-cover"
              width={1080}
              height={720}
            />
          </div>
          {/* <div className="w-[300px] md:w-[900px] h-[100px] md:h-[550px]"> */}
          {/* <img src="/landscape.jpg" alt="Slide 1" className="w-full h-full" /> */}
          {/* <Image src={images[selectedImageIndex]} alt="Slide" width={1080} height={720} /> */}
          {/* </div> */}

          <div className="flex items-center justify-center gap-5 absolute">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                if (selectedImageIndex - 1 < 0) {
                  setSelectedImageIndex(images.length - 1);
                } else {
                  setSelectedImageIndex(selectedImageIndex - 1);
                }
              }}
            >
              {"<"}
            </button>
            <Image src={viewmasterPlain} alt="Viewmaster Plain" width={1080} height={720} />
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                if (selectedImageIndex + 1 >= images.length) {
                  setSelectedImageIndex(0);
                } else {
                  setSelectedImageIndex(selectedImageIndex + 1);
                }
              }}
            >
              {">"}
            </button>
          </div>
        </div>
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
