import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  document.title = "Contato - Batman | Filme 2022";
  return (
    <>
      <div className="left-0 w-full h-dvh sticky top-0 bg-bannerImage bg-center bg-cover z-[-1]" />
      <h1 className="absolute  top-[100px] md:top-[140px] w-full text-white uppercase bg-black/60 text-[23px] md:text-[43px] text-center px-[1%]">
        entre em contato conosco!
      </h1>
      <ContactForm />
    </>
  );
};
