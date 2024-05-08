import { ActorCards } from "./ActorCards";

interface ActorCardProps {
  image: string;
  name: string;
}

export const Actors = () => {
  const actors: ActorCardProps[] = [
    {
      image:
        "https://i.pinimg.com/736x/58/cb/76/58cb76e4973fc4727d40a2a1f318e369.jpg",
      name: "Robert Pattinson - Batman",
    },
    {
      image:
        "https://rare-gallery.com/mocahbig/1375858-catwoman-selina-kyle-the-batman-2022-movie-4k.jpg",
      name: "Zoë Kravitz - Mulher Gato",
    },
    {
      image:
        "https://brobible.com/wp-content/uploads/2020/02/jeffrey-wright.jpeg?quality=90&w=650&is-pending-load=1",
      name: "Jeffrey Wright - James Gordon",
    },
  ];
  return (
    <section className="w-screen bg-black pt-[50px] flex justify-center gap-[20px] items-center flex-col md:flex-row px-[20px] flex-wrap">
      {actors.map((actor: ActorCardProps, index: number) => (
        <ActorCards key={index} image={actor.image} name={actor.name} />
      ))}
    </section>
  );
};
