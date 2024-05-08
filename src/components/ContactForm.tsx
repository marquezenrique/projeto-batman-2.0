export const ContactForm = () => {
  return (
    <form className="absolute -translate-x-1/2 left-1/2 top-[180px] md:top-[226px] bg-black/80 backdrop-blur-sm rounded-[15px] w-[290px] sm:-[400px] md:w-[611px] p-[20px] flex flex-col gap-[20px] items-end">
      <div className="w-full flex flex-col gap-[5px]">
        <p className="text-white text-[15px]">Nome Completo</p>
        <input
          className="w-full text-[15px] h-[35px] pl-[3%] rounded-[15px] bg-transparent border-t-neutral-400 border-l-neutral-400 border-b-white border-r-white border-solid border-[2px] text-white"
          type="text"
          placeholder="Bruce Wayne"
        />
      </div>
      <div className="w-full flex flex-col gap-[5px]">
        <p className="text-white text-[15px]">Seu E-Mail</p>
        <input
          className="w-full text-[15px] h-[35px] pl-[3%] rounded-[15px] bg-transparent border-t-neutral-400 border-l-neutral-400 border-b-white border-r-white border-solid border-[2px] text-white"
          type="email"
          placeholder="batman@gotham.com"
        />
      </div>
      <div className="w-full flex flex-col gap-[5px]">
        <p className="text-white text-[15px]">Sua Mensagem</p>
        <textarea
          className="w-full rounded-[15px] bg-transparent border-t-neutral-400 border-l-neutral-400 border-b-white border-r-white border-solid border-[2px] py-[6px] pl-[9px] h-[100px] resize-none text-white"
          placeholder="Digite aqui..."
        />
      </div>
      <button
        type="submit"
        className="text-red-600 bg-white rounded-[15px] h-[37px] px-[10px] hover:bg-neutral-400 hover:text-red-800 transition-colors duration-300"
      >
        Enviar
      </button>
    </form>
  );
};
