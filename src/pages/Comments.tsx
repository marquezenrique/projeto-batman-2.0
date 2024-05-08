import { Comment } from "../components/Comment";

interface CommentaryContent {
  user: {
    image: string;
    name: string;
    verified?: boolean;
  };
  message: string;
  date: string;
}

export const Comments = () => {
  document.title = "Comentários - Batman | Filme 2022";
  const comments: CommentaryContent[] = [
    {
      user: {
        image:
          "https://th.bing.com/th/id/R.3784adf5e8d74915eec8a19d44a611c6?rik=io2Gf4rZQXn4yQ&pid=ImgRaw&r=0",
        name: "André Ferreira",
      },
      message:
        "Estou super empolgado para o lançamento! Já até comprei meu ingresso!",
      date: "05/01/2022",
    },
    {
      user: {
        image:
          "https://th.bing.com/th/id/R.0f5b556910cc06e1a791dcf51b743130?rik=utJtoKOerywRuA&pid=ImgRaw&r=0",
        name: "Juliana Souza",
      },
      message:
        "Mal posso esperar! Tenho visto muitas críticas positivas sobre esse filme.",
      date: "03/01/2022",
    },
    {
      user: {
        image:
          "https://www.actuallynotes.com/wp-content/uploads/2018/02/Julio-Cesar.jpg",
        name: "Júlio César",
      },
      message:
        "Espero que não me decepcione! Quero ver um filme tão bom quanto o Coringa!",
      date: "29/12/2021",
    },
    {
      user: {
        image:
          "https://zap.aeiou.pt/wp-content/uploads/2023/02/7bc9f3f639817f0b061426eadc1e60a9-2048x1363.jpg",
        name: "Keanu Reeves",
        verified: true,
      },
      message: "Ancioso para apreciar essa obra!",
      date: "23/11/2021",
    },
  ];
  return (
    <>
      <div className="w-full h-screen sticky top-0 bg-bannerImage bg-bannerPosition bg-cover z-[-1]" />
      <ul className="absolute text-white -translate-x-1/2 left-1/2 top-[140px] w-[80%] lg:w-1/2 flex flex-col gap-[20px]">
        {comments.map((comment: CommentaryContent, index: number) => (
          <Comment
            key={index}
            user={comment.user}
            message={comment.message}
            date={comment.date}
          />
        ))}
      </ul>
    </>
  );
};
