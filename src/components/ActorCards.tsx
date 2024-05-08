interface ActorCardProps {
  image: string;
  name: string;
}

export const ActorCards = (props: ActorCardProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
      }}
      className="relative h-[500px] w-[312px] md:h-[625px] md:w-[390px] bg-center bg-cover hover:scale-[1.07] transition-transform duration-500 rounded-[5px]"
    >
      <p className="absolute left-[25px] bottom-[25px] z-50 text-white text-[25px]">
        {props.name}
      </p>
    </div>
  );
};
