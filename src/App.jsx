import "./App.css";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  const [open, setOpen] = useState(false);

  // Fechar menu ao clicar em uma section e fazer scroll suave
  const handleNavigation = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; // ajuste fino (px)

      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[rgb(67,67,67)] min-h-screen scroll-smooth pt-30">
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[998]"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MENU LATERAL */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[rgb(40,40,40)] text-white p-6 shadow-xl z-999
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* TÍTULO + BOTÃO DE FECHAR */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Navegação</h1>

          {/* BOTÃO FECHAR (X) */}
          <button
            onClick={() => setOpen(false)}
            className="flex flex-col justify-center items-center w-4 h-4 cursor-pointer"
          >
            <span className="block w-3 h-[2px] bg-white rotate-45 absolute"></span>
            <span className="block w-3 h-[2px] bg-white -rotate-45 absolute"></span>
          </button>
        </div>
        <ul className="flex flex-col gap-4 text-lg">
          <li>
            <button
              onClick={() => handleNavigation("intro")}
              className="text-left hover:text-red-400"
            >
              Introdução
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("sobre")}
              className="text-left hover:text-red-400"
            >
              Sobre Mim
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("projetos")}
              className="text-left hover:text-red-400"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("hab")}
              className="text-left hover:text-red-400"
            >
              Habilidades
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("contato")}
              className="text-left hover:text-red-400"
            >
              Contato
            </button>
          </li>
        </ul>
      </div>

      {/* NAVBAR */}
      {/* NAVBAR — FIXA NO TOPO */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[rgb(50,50,50)] text-white py-4 px-3 shadow-lg flex">
        {/* BOTÃO MENU — esquerdo */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[5px] cursor-pointer"
        >
          <span className="block w-8 h-[3px] bg-white rounded"></span>
          <span className="block w-8 h-[3px] bg-white rounded"></span>
          <span className="block w-8 h-[3px] bg-white rounded"></span>
        </button>

        {/* TÍTULO CENTRAL */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold bg-gradient-to-r from-[rgb(209,28,28)] to-[rgb(255,255,255)] bg-clip-text text-transparent">
          NL
        </h1>
        
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* BOTÃO BAIXAR CV */}
          <a
            href="/cv.pdf" // caminho do arquivo dentro da pasta public
            download
            className="px-3 py-1   rounded text-black bg-white hover:bg-red-400 hover:text-white transition  rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] "
          >
            Baixar CV
          </a>

          {/* ÍCONES — direita */}
          <div className="flex items-center gap-4 ">
            <a
              href="https://github.com/Nathan-ADL"
              target="_blank"
              className="text-white text-3xl hover:text-red-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-ariel-damasio-le%C3%A3o-7a64522b5/"
              target="_blank"
              className="text-white text-3xl hover:text-red-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-[1200px] w-full mx-auto mt-40 bg-white px-20 py-6 rounded-xl shadow-lg flex flex-col gap-200">
        <div id="intro" className="bg-gray-500 min-h-20 rounded text-white p-4">
          <h1 className="text-2xl">Introdução</h1>
          <p>Principal Básico e Foto algo assim</p>
        </div>

        <div id="sobre" className="bg-gray-500 min-h-20 rounded text-white p-4">
          <h2 className="text-3xl mb-5">Sobre Mim</h2>
          <p>Nome Completo</p>
          <p>Formação</p>
          <p>Objetivos</p>
          <p>Área de Interesse</p>
        </div>

        <div
          id="projetos"
          className="bg-gray-500 min-h-20 text-white p-4 rounded-br-[8px] rounded-tl-[8px] rounded-tr-[32px] rounded-bl-[32px] border-4 border-black"
        >
          <h1 className="text-2xl">Projetos</h1>
          <p>Fotos e descrições</p>
        </div>

        <div id="hab" className="bg-gray-500 min-h-20 rounded text-white p-4">
          <h1 className="text-2xl">Habilidades</h1>
        </div>

        <div
          id="contato"
          className="bg-gray-500 min-h-20 rounded text-white p-4"
        >
          <h1 className="text-2xl">Contato</h1>
        </div>
      </div>
    </div>
  );
}
