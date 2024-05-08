interface CommentaryContent {
  user: {
    image: string;
    name: string;
    verified?: boolean;
  };
  message: string;
  date: string;
}

export const Comment = (props: CommentaryContent) => {
  return (
    <li className="w-full bg-black/70 backdrop-blur-sm p-[10px] rounded-[10px] min-h-[177px]">
      <header className="flex items-center gap-[15px]">
        <img
          className="rounded-full size-[60px] border-[5px] border-solid border-neutral-500 hover:border-neutral-300 transition-colors duration-500 cursor-pointer"
          src={props.user.image}
          draggable={false}
        />
        <p className="text-neutral-50 text-[15px] flex items-center truncate">
          {props.user.verified && (
            <svg
              className="mr-[7px] hidden sm:visible"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#0085FF" />
              <path
                d="M8.21047 14.6L4.60001 11.0035L6.24536 9.36448L8.21047 11.3278L13.9547 5.60001L15.6 7.239L8.21047 14.6Z"
                fill="white"
              />
            </svg>
          )}
          {props.user.name}
          <span className="text-neutral-400 ml-[4px] hidden sm:visible">
            {" "}
            • {props.date}
          </span>
        </p>
      </header>
      <p className="border-[2px] border-transparent border-b-neutral-500 px-[14px] mx-[14px] pt-[15px] pb-[10px] text-[13px]">
        {props.message}
      </p>
    </li>
  );
};
