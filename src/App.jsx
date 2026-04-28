import "./App.css";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; 

      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[rgb(67,67,67)] min-h-screen h-full scroll-smooth pt-30">
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
            className="flex flex-col justify-center items-center w-4 h-4 cursor-pointer hover:text-red-400"
          >
            <span className="block w-3 h-0.5 bg-current rotate-45 absolute"></span>
            <span className="block w-3 h-0.5 bg-current -rotate-45 absolute"></span>
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
              onClick={() => handleNavigation("Form&Part")}
              className="text-left hover:text-red-400"
            >
              Formação e Participações
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
      <div className="fixed top-0 left-0 w-full z-50 bg-[rgb(50,50,50)] text-white py-4 px-3 shadow-lg flex items-center">
        {/* BOTÃO MENU — esquerdo */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.25 cursor-pointer"
        >
          <span className="block w-8 h-0.75 bg-white rounded"></span>
          <span className="block w-8 h-0.75 bg-white rounded"></span>
          <span className="block w-8 h-0.75 bg-white rounded"></span>
        </button>

        {/* TÍTULO CENTRAL */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold bg-gradient-to-r from-[rgb(255,28,28)] to-[rgb(243,98,178)] bg-clip-text text-transparent">
          NL
        </h1>

        <div className="flex-1 flex justify-end items-center gap-4">
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
          {/* BOTÃO BAIXAR CV */}
          <a
            href="/CV-Nathan Ariel Damasio Leão.pdf"
            download
            className="px-3 py-1 text-black bg-white
            hover:bg-gradient-to-r hover:from-[rgb(255,0,0)] hover:to-[rgb(243,98,178)]
            hover:text-white transition
            rounded-tl-[14px] rounded-bl-sm rounded-br-[14px] rounded-tr-sm
            hover:animate-shakeX"
          >
            Baixar CV
          </a>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-[1200px] w-full mx-auto mt-20 bg-white px-20 py-6 rounded-xl shadow-lg flex flex-col gap-200">
        <div id="intro" className="bg-gray-500 rounded text-white p-4">
          <div className="flex justify-between gap-6">
            {/* TEXTO - lado esquerdo */}
            <div className="flex-1">

              <h1 className="text-5xl mb-3 ">Nathan Ariel Damasio Leão</h1>
              <h2 className="text-3xl">Estudante de Informática</h2>
            </div>

            {/* IMAGEM - lado direito */}
            <div
              className="w-70 h-90 bg-gray-400 rounded-lg flex items-center justify-center
                    text-black font-semibold border border-white/20"
            >
              Foto Aqui
            </div>
          </div>
        </div>

        <div id="sobre" className="bg-gray-500 min-h-20 rounded text-white p-4">
          <h2 className="text-3xl mb-5">Sobre Mim</h2>
          <p>
            Atualmente sou aluno do curso tecnólogo de Desenvolvimento de
            Software Multiplataforna na Fatec unidade de São José dos Campos,
            com foco principalmente em no desenvolvimento de aplicações Web
            Full-Stack.
          </p>
          <br />
          <p>
            Me formei no ensino médio técnico no curso de Informática na escola
            UNIVAP - Unidade centro,portanto assim experienciei diversas
            situações que favoreceram meu desenvolviment como técnico e que me
            permitiu o contato com a Informática antes de começar o ensino
            superior
          </p>
          <br />
          <p>
            Almejo seguir carreira na área e assim construir uma carreira a
            partir desse ponto
          </p>
          <br />
          <p>Área de Interesse</p>
        </div>
        {/*---------------------------------------------------------------------------------------------------------------------*/}
        <div
          id="Form&Part"
          className="bg-gray-500 min-h-20 text-white p-4 rounded-br-lg rounded-tl-lg rounded-tr-4xl rounded-bl-4xl border-4 border-black"
        >
          <h1 className="text-2xl">Formação e Participações</h1>
          <div className="grid md:grid-cols-2 gap-15 p-2 items-start mt-10">
            {/* CARD UNIVAP */}
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden border-2 border-black cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/univap-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/univap-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg
        transition-all duration-500 
        group-hover:scale-90 group-hover:-translate-y-3"
                />

                <div>
                  <h2 className="text-xl font-bold">UNIVAP</h2>

                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    Técnico em Informática
                  </p>
                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">{"[Completo]"}</p>

                  <p
                    className="text-sm opacity-0 max-h-0 overflow-hidden
          group-hover:opacity-100 group-hover:max-h-40 
          transition-all duration-500"
                  >
                    Formação técnica que marcou o início da minha trajetória na área de tecnologia, onde tive contato com lógica de programação, banco de dados e desenvolvimento de sistemas. Foi aqui que desenvolvi minha base e interesse pela área.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD FATEC */}
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden border-2 border-black cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/fatec-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/fatec-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg
        transition-all duration-500 
        group-hover:scale-90 group-hover:-translate-y-3"
                />

                <div>
                  <h2 className="text-xl font-bold">FATEC</h2>

                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    DSM - Desenvolvimento de Software
                  </p>
                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    {"[Em Curso]"}
                  </p>
                  <p
                    className="text-sm opacity-0 max-h-0 overflow-hidden
          group-hover:opacity-100 group-hover:max-h-40 
          transition-all duration-500"
                  >
                   Experiência voltada ao desenvolvimento full-stack, com foco em aplicações web modernas, APIs REST, banco de dados e boas práticas de desenvolvimento. Participação ativa em projetos acadêmicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projetos"
          className="bg-gray-500 min-h-20 text-white p-4 rounded-br-lg rounded-tl-lg rounded-tr-4xl rounded-bl-4xl border-4 border-black"
        >
          <h1 className="text-2xl">Projetos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <Link
              to="/Projeto1"
              className="bg-[rgb(80,80,80)] rounded-xl p-4 border-2 border-black hover:scale-105 transition cursor-pointer text-white"
            >
              <h2 className="text-xl font-bold">Projeto 1</h2>
              <p className="text-sm opacity-70">Descrição rápida</p>
            </Link>
          </div>
        </div>

        <div id="hab" className="bg-gray-500 min-h-20 rounded text-white p-4">
          <h1 className="text-2xl">Habilidades e Experiências</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* CARD — Tailwind */}
            <div
              className="flex items-center gap-2 p-1 bg-white text-black rounded-xl shadow 
                    hover:scale-105 hover:bg-red-400 hover:text-white transition transform cursor-pointer"
            >
              <SiTailwindcss className="text-4xl " />
              <span className="font-semibold ">Tailwind</span>
            </div>
          </div>
        </div>

        <div
          id="contato"
          className="bg-gray-500 min-h-20 rounded text-white p-4 flex flex-col items-center"
        >
          <div>
            <h1 className="text-2xl">Contato</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* GITHUB */}
            <a
              href="https://github.com/Nathan-ADL"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg 
               hover:bg-red-400 hover:text-white transition"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/nathan-ariel-damasio-le%C3%A3o-7a64522b5/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg
               hover:bg-red-400 hover:text-white transition"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>

            {/* EMAIL */}
            <a
              href="mailto:nathanarieldamasioleao@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg
               hover:bg-red-400 hover:text-white transition"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center ">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[rgb(255,28,28)] to-[rgb(243,98,178)] bg-clip-text text-transparent mb-5">
          NL
        </h1>
      </div>
    </div>
  );
}
