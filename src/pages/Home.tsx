import { Actors } from "../components/Actors";
import { Trailer } from "../components/Trailer";

export const Home = () => {
  document.title = "Batman | Filme 2022";
  return (
    <>
      <div className="w-full h-[300px] md:h-[625px] sticky top-0 bg-bannerImage bg-bannerPosition bg-cover z-[-1]" />
      <Trailer />
      <Actors />
    </>
  );
};
