export const Trailer = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center w-screen bg-black px-[7.5%]">
      <span className="h-[50px] w-screen bg-gradient-to-t from-black to-transparent -top-[50px] absolute left-0" />
      <iframe
        className="flex-none w-full md:w-1/2 aspect-video"
        src="https://www.youtube.com/embed/rsQEor4y2hg?si=0w_XD2pLwrOAej78"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <div className="pl-[25px] flex flex-col gap-[25px]">
        <p className="text-white text-[19px]">
          Batman segue o segundo ano de Bruce Wayne (Robert Pattinson) como o
          herói de Gotham, causando medo nos corações dos criminosos da sombria
          cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth
          (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede
          corrupta de funcionários e figuras importantes do distrito, o
          vigilante solitário se estabeleceu como a única personificação da
          vingança entre seus concidadãos.
        </p>
        <button
          className="bg-red-600 w-[200px] h-[60px] px-[10px] py-[8px] font-bold text-[19px] rounded-[5px] text-white font-sans hover:bg-white hover:text-black transition-colors duration-700"
          onClick={() => window.open("https://www.ingresso.com/filme/batman")}
        >
          Comprar ingresso
        </button>
      </div>
    </section>
  );
};
