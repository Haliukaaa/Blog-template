import { useContext, useEffect, useState } from "react";
import { StateContext } from "../components/utils/Data";
import { Button2 } from "../components/ui/Button2";
import { LoadMore } from "../components/ui/LoadMore";
import { Title } from "../components/ui/Title";
import Link from "next/link";

const AllBlog = () => {
  const { filteredArray, setFilteredArray, loadMore } =
    useContext(StateContext);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTag = (tag) => {
    if (tag === "all") {
      setSelectedTags([]);
      return;
    }

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setSelectedTags([tag]);
  };

  const filteredArticles = filteredArray.filter((article) => {
    const firstTag = article.tag_list[0];
    if (selectedTags.length === 0) {
      return true;
    }
    return selectedTags.includes(firstTag);
  });
  console.log(filteredArticles);

  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="mb-[100px] mt-12">
        <Title text="All Blog Post" />
        <div className="flex justify-between mt-10 *:font-bold">
          {/* tags */}
          <ul className="flex gap-4">
            <li
              className="text-color2 hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("all")}
            >
              All
            </li>
            <li
              className="text-color2 hover:cursor-pointer hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("opensource")}
            >
              Opensource
            </li>
            <li
              className="text-color2 hover:cursor-pointer hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("career")}
            >
              Career
            </li>
            <li
              className="text-color2 hover:cursor-pointer hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("discuss")}
            >
              Discuss
            </li>
            <li
              className="text-color2 hover:cursor-pointer hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("webdev")}
            >
              Webdev
            </li>
            <li
              className="text-color2 hover:cursor-pointer hover:text-yellow-500 hover:scale-105 transition-all"
              onClick={() => handleTag("ai")}
            >
              AI
            </li>
          </ul>
        </div>
        {/* Articles */}
        <div className="grid grid-cols-3 gap-5 mt-8 mb-10">
          {filteredArticles.map((el) => {
            return (
              <div>
                <Link href={{ pathname: "/SinglePost", query: { id: el.id } }}>
                  <div className="flex flex-col rounded-xl border border-slate-200 p-5 gap-7 h-full hover:shadow-md transition-all">
                    {/* image */}
                    <div>
                      <img
                        src={el.cover_image || "./placeholderimg.jpeg"}
                        className="rounded-md h-[240px] w-full object-cover"
                      />
                    </div>
                    {/* text container */}
                    <div className="flex flex-col justify-between gap-5 flex-1">
                      <div>
                        <Button2
                          buttonText={
                            el.tag_list[0] || el.tag_list[1] || "news"
                          }
                        />
                      </div>
                      <h1 className="font-bold text-2xl">{el.title}</h1>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <img
                            src={el.user.profile_image}
                            alt="profile image"
                            className="w-[40px] rounded-full"
                          />
                          <p className="text-gray-400">{el.user.name}</p>
                        </div>
                        <p className="text-gray-400">
                          {el.readable_publish_date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* Load more */}
        <div className="flex justify-center">
          <div
            className="loadmore hover:cursor-pointer hover:scale-110 hover:bg-black hover:text-white transition-all"
            onClick={loadMore}
          >
            Load More
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
