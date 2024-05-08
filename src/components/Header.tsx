import Logo from "/logo.jpg";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="h-[90px] w-full bg-black flex justify-center md:justify-between items-center px-[90px]">
      <img
        onClick={() => navigate("/")}
        className="h-[80px] cursor-pointer"
        src={Logo}
        alt="Logo"
        draggable={false}
      />
      <nav className="md:flex gap-[10px] hidden">
        <button
          onClick={() => navigate("/")}
          className={clsx(
            "text-white uppercase h-[44px] px-[12px] hover:bg-red-600 transition-colors duration-300 rounded-[10px] text-[19px]",
            location.pathname === "/" && "bg-red-600"
          )}
        >
          home
        </button>
        <button
          onClick={() => navigate("/contatos")}
          className={clsx(
            "text-white uppercase h-[44px] px-[12px] hover:bg-red-600 transition-colors duration-300 rounded-[10px] text-[19px]",
            location.pathname.includes("contatos") && "bg-red-600"
          )}
        >
          contatos
        </button>
        <button
          onClick={() => navigate("/fotos")}
          className={clsx(
            "text-white uppercase h-[44px] px-[12px] hover:bg-red-600 transition-colors duration-300 rounded-[10px] text-[19px]",
            location.pathname.includes("fotos") && "bg-red-600"
          )}
        >
          fotos
        </button>
        <button
          onClick={() => navigate("/comentarios")}
          className={clsx(
            "text-white uppercase h-[44px] px-[12px] hover:bg-red-600 transition-colors duration-300 rounded-[10px] text-[19px]",
            location.pathname.includes("comentarios") && "bg-red-600"
          )}
        >
          comentários
        </button>
      </nav>
    </header>
  );
};
