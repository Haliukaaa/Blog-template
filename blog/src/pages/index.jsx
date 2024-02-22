import {
  Header,
  Articles,
  Carousel,
  Contact,
  Footer,
  Trending,
  AllBlog,
} from "../components/layout/index";


export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="container max-w-screen-xl mx-auto">
        <Trending />
        <Articles />
      </div>
    </div>
  );
}
