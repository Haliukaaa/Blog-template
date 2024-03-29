import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { StateContext } from "../utils/Data";
import Link from "next/link";

export const Carousel = () => {
  const { carousel } = useContext(StateContext);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const prev = () => {
    setCurrent((current) =>
      current === 0 ? carousel.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent((current) =>
      current === carousel.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="mt-[100px] max-w-screen-xl mx-auto">
      {/* Carousel */}
      <div className="flex w-full h-[350px] sm:h-[450px] md:h-[550px] max-w-[1216px] lg:h-[651px] overflow-hidden rounded-xl mx-auto relative">
        {carousel.map((el, index) => (
          <Link href={{ pathname: "/SinglePost", query: { id: el.id } }}>
            <div
              key={index}
              className="transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {/* text container */}
              <div className="absolute bg-black bg-opacity-20 bottom-[302px] sm:w-2/5 md:w-1/2 md:bg-white h-[200px] md:left-3 sm:bottom-52 sm:left-1 md:bottom-28 lg:bottom-3 md:min-h-[250px] hover:h-auto z-[1] p-10 rounded-xl md:border border-slate-200 flex flex-col gap-5 md:justify-between">
                <Button buttonText={el.tag_list[0] || "news"} />
                <h1 className="text-2xl text-white md:text-black md:text-3xl lg:text-4xl h-fit font-semibold sm:overflow-hidden hover:max-h-fit hover:overflow-visible">
                  {el.title}
                </h1>
                <p className="text-gray-400">{el.readable_publish_date}</p>
              </div>
              {/* img container */}
              <div className="rounded-xl w-[1216px] overflow-hidden flex relative">
                {/* shadow */}
                <div className="w-full h-full bg-black absolute bg-opacity-20"></div>
                {/* image */}
                <div className="rounded-xl">
                  <img
                    className="w-[1216px] h-[651px] rounded-xl object-cover"
                    src={el.cover_image || "./placeholderimg.jpeg"}
                    alt={`Slide ${index + 1}`}
                  ></img>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Left and Right buttons */}
      <div className="flex gap-3 max-w-[1216px] justify-end mx-auto mt-3">
        {/* Left */}
        <div
          onClick={prev}
          className="cursor-pointer border border-gray-600 rounded-md p-3 w-10 h-10"
        >
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Icon"
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Right */}
        <div
          onClick={next}
          className="cursor-pointer border border-gray-600 rounded-md p-3 w-10 h-10"
        >
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Icon"
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
