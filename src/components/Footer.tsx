import Logo from "/logo.jpg";

export const Footer = () => {
  return (
    <footer className="w-screen h-[315px] bg-gradient-to-t from-black from-[85%] to-transparent pt-[80px] pb-[35px] flex flex-col items-center justify-around">
      <img className="w-[120px]" src={Logo} alt="Logo" draggable={false} />
      <p className="text-white text-[15px]">Todos os direitos reservados ©</p>
      <p className="text-white text-[15px]">
        Desenvolvido por: Enrique Marquez
      </p>
    </footer>
  );
};
