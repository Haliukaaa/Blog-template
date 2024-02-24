import { Button } from "../ui/Button";
import { useContext } from "react";
import { StateContext } from "../utils/Data";
import { Title } from "../ui/Title";
import Link from "next/link";

export const Trending = () => {
  const { trending } = useContext(StateContext);

  return (
    <div className="my-[100px]">
      <div>
        <Title text="Trending" />
      </div>
      <div className="flex gap-3 mt-10 overflow-x-auto md:overflow-hidden">
        {trending.map((el) => {
          return (
            <Link href={{ pathname: "/SinglePost", query: { id: el.id } }}>
              <div className="relative w-[305px] h-[320px] overflow-hidden rounded-xl">
                {/* text container */}
                <div className="absolute z-[1] bottom-0 p-8">
                  <div className="flex flex-col gap-3 overflow-hidden transition-transform duration-300 transform hover:overflow-visible hover:-translate-y-2/4">
                    <Button buttonText={el.tag_list[0] || el.tag_list[1]} />
                    <p className="text-white font-bold text-lg h-14 overflow-hidden hover:overflow-visible">
                      {el.title}
                    </p>
                  </div>
                </div>

                {/* img container */}
                <div className="relative h-full">
                  {/* shadow */}
                  <div className="w-full h-full absolute bg-black bg-opacity-20"></div>
                  <img
                    className="w-full h-full object-cover"
                    src={el.cover_image || "./placeholderimg.jpeg"}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
